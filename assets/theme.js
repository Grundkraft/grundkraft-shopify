document.documentElement.classList.remove('no-js');

class GrundkraftHeader {
  constructor(root) {
    this.root = root;
    this.toggle = root.querySelector('[data-mobile-toggle]');
    this.menu = root.querySelector('[data-mobile-menu]');
    if (!this.toggle || !this.menu) return;
    this.toggle.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    const open = this.toggle.getAttribute('aria-expanded') === 'true';
    this.toggle.setAttribute('aria-expanded', String(!open));
    this.menu.hidden = open;
    document.body.classList.toggle('menu-open', !open);
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
  }

  scroll(direction) {
    const firstCard = this.track.querySelector('.gk-product-box');
    const gap = 16;
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : this.track.clientWidth * 0.8;
    this.track.scrollBy({ left: distance * direction, behavior: 'smooth' });
  }
}

class GrundkraftProduct {
  constructor(root) {
    this.root = root;
    this.select = root.querySelector('[data-gk-variant-select]');
    this.price = root.querySelector('[data-gk-product-price]');
    this.compare = root.querySelector('[data-gk-compare-price]');
    this.add = root.querySelector('[data-gk-add]');
    this.variantsNode = root.querySelector('[data-gk-variants]');
    this.moneyFormatNode = root.querySelector('[data-gk-money-format]');
    if (!this.select || !this.variantsNode) return;

    try {
      this.variants = JSON.parse(this.variantsNode.textContent || '[]');
      this.moneyFormat = JSON.parse(this.moneyFormatNode?.textContent || '"€{{amount}}"');
    } catch (error) {
      this.variants = [];
      this.moneyFormat = '€{{amount}}';
    }

    if (this.select.tagName === 'SELECT') {
      this.select.addEventListener('change', () => this.update());
    }
  }

  formatMoney(cents) {
    const value = (Number(cents || 0) / 100).toFixed(2).replace('.', ',');
    return String(this.moneyFormat || '€{{amount}}')
      .replace('{{amount}}', value)
      .replace('{{ amount }}', value)
      .replace('{{amount_with_comma_separator}}', value)
      .replace('{{ amount_with_comma_separator }}', value);
  }

  update() {
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
  }
}

document.querySelectorAll('[data-gk-header]').forEach((el) => new GrundkraftHeader(el));
document.querySelectorAll('[data-gk-toolbox]').forEach((el) => new GrundkraftToolbox(el));
document.querySelectorAll('[data-gk-product]').forEach((el) => new GrundkraftProduct(el));
