document.documentElement.classList.remove('no-js');

class GrundkraftHeader {
  constructor(root) {
    this.root = root;
    this.toggle = root.querySelector('[data-mobile-toggle]');
    this.menu = root.querySelector('[data-mobile-menu]');
    if (!this.toggle || !this.menu) return;

    this.toggle.addEventListener('click', () => this.toggleMenu());
    this.menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => this.closeMenu()));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.closeMenu();
    });
  }

  toggleMenu() {
    const open = this.toggle.getAttribute('aria-expanded') === 'true';
    if (open) this.closeMenu();
    else this.openMenu();
  }

  openMenu() {
    this.toggle.setAttribute('aria-expanded', 'true');
    this.menu.hidden = false;
    document.body.classList.add('menu-open');
  }

  closeMenu() {
    this.toggle.setAttribute('aria-expanded', 'false');
    this.menu.hidden = true;
    document.body.classList.remove('menu-open');
  }
}

class GrundkraftToolbox {
  constructor(root) {
    this.root = root;
    this.track = root.querySelector('[data-toolbox-track]');
    this.prev = root.querySelector('[data-toolbox-prev]');
    this.next = root.querySelector('[data-toolbox-next]');
    if (!this.track) return;
    this.prev?.addEventListener('click', () => this.scroll(-1));
    this.next?.addEventListener('click', () => this.scroll(1));
    this.track.addEventListener('scroll', () => this.updateControls(), { passive: true });
    this.resizeObserver = new ResizeObserver(() => this.updateControls());
    this.resizeObserver.observe(this.track);
    this.updateControls();
  }

  updateControls() {
    const end = this.track.scrollWidth - this.track.clientWidth;
    if (this.prev) this.prev.disabled = this.track.scrollLeft <= 1;
    if (this.next) this.next.disabled = this.track.scrollLeft >= end - 1;
  }

  scroll(direction) {
    const firstCard = this.track.querySelector('.gk-product-box');
    const gap = parseFloat(getComputedStyle(this.track).columnGap) || 0;
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : this.track.clientWidth * 0.8;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    this.track.scrollBy({ left: distance * direction, behavior });
  }
}

class GrundkraftProduct {
  constructor(root) {
    this.root = root;
    this.select = root.querySelector('[data-gk-variant-select]');
    this.price = root.querySelector('[data-gk-product-price]');
    this.compare = root.querySelector('[data-gk-compare-price]');
    this.add = root.querySelector('[data-gk-add]');
    this.availability = root.querySelector('[data-gk-availability]');
    this.sku = root.querySelector('[data-gk-sku]');
    this.mainMedia = root.querySelector('[data-gk-main-media]');
    this.thumbs = Array.from(root.querySelectorAll('[data-gk-thumb]'));
    this.variantsNode = root.querySelector('[data-gk-variants]');
    this.moneyFormatNode = root.querySelector('[data-gk-money-format]');

    try {
      this.variants = JSON.parse(this.variantsNode?.textContent || '[]');
      this.moneyFormat = JSON.parse(this.moneyFormatNode?.textContent || '"€{{amount}}"');
    } catch (error) {
      this.variants = [];
      this.moneyFormat = '€{{amount}}';
    }

    this.thumbs.forEach((thumb) => thumb.addEventListener('click', () => this.showThumb(thumb)));
    if (this.select?.tagName === 'SELECT') this.select.addEventListener('change', () => this.update());
  }

  formatMoney(cents) {
    const amount = Number(cents || 0) / 100;
    const comma = amount.toFixed(2).replace('.', ',');
    const dot = amount.toFixed(2);
    return String(this.moneyFormat || '€{{amount}}')
      .replace(/{{\s*amount_with_comma_separator\s*}}/g, comma)
      .replace(/{{\s*amount\s*}}/g, dot.replace('.', ','));
  }

  showThumb(thumb) {
    if (!this.mainMedia || !thumb) return;
    const src = thumb.dataset.mediaSrc;
    if (!src) return;
    this.mainMedia.src = src;
    if (thumb.dataset.mediaSrcset) this.mainMedia.srcset = thumb.dataset.mediaSrcset;
    this.mainMedia.alt = thumb.dataset.mediaAlt || '';
    this.mainMedia.dataset.mediaId = thumb.dataset.mediaId || '';
    this.thumbs.forEach((item) => item.classList.toggle('is-active', item === thumb));
  }

  update() {
    if (!this.select) return;
    const id = Number(this.select.value);
    const variant = this.variants.find((item) => Number(item.id) === id);
    if (!variant) return;

    if (this.price) this.price.textContent = this.formatMoney(variant.price);

    if (this.compare) {
      const hasCompare = Number(variant.compare_at_price || 0) > Number(variant.price || 0);
      this.compare.hidden = !hasCompare;
      this.compare.textContent = hasCompare ? this.formatMoney(variant.compare_at_price) : '';
    }

    if (this.add) {
      this.add.disabled = !variant.available;
      this.add.textContent = variant.available ? 'In den Warenkorb' : 'Nicht verfügbar';
    }
    if (this.availability) this.availability.textContent = variant.available ? 'Verfügbar' : 'Aktuell nicht verfügbar';
    if (this.sku) {
      this.sku.textContent = variant.sku ? `Art.-Nr. ${variant.sku}` : '';
      this.sku.hidden = !variant.sku;
    }

    const mediaId = variant.featured_media?.id || variant.featured_image?.id;
    if (mediaId) {
      const matchingThumb = this.thumbs.find((thumb) => Number(thumb.dataset.mediaId) === Number(mediaId));
      if (matchingThumb) this.showThumb(matchingThumb);
    }

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('variant', String(variant.id));
      window.history.replaceState({}, '', url.toString());
    } catch (error) {
      // URL synchronization is non-critical.
    }
  }
}

document.querySelectorAll('[data-gk-header]').forEach((el) => new GrundkraftHeader(el));
document.querySelectorAll('[data-gk-toolbox]').forEach((el) => new GrundkraftToolbox(el));
document.querySelectorAll('[data-gk-product]').forEach((el) => new GrundkraftProduct(el));
