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

document.querySelectorAll('[data-gk-header]').forEach((el) => new GrundkraftHeader(el));
