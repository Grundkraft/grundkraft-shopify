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

document.querySelectorAll('[data-gk-header]').forEach((el) => new GrundkraftHeader(el));
document.querySelectorAll('[data-gk-toolbox]').forEach((el) => new GrundkraftToolbox(el));
