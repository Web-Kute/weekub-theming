export function Weekub() {
  this.registerElements();
  this.navHighlighter();
  this.screenOrientation();
}

Weekub.prototype.registerElements = function () {
  this.elements = {
    container: document.getElementById('container'),
    sections: document.querySelectorAll('.section'),
    toggleMenu: document.querySelector('.togglemenu'),
    burgerMenu: document.querySelector('.burgermenu'),
    arrowUp: document.querySelector('.arrow-up'),
    mask: document.querySelector('.mask'),
  };
};

Weekub.prototype.events = function () {
  document.addEventListener('click', this.closeMenuOutSide.bind(this));
  window.addEventListener('scroll', this.navHighlighter.bind(this));
  this.elements.toggleMenu.addEventListener(
    'click',
    this.showHideMenu.bind(this),
  );
  this.elements.arrowUp.addEventListener('click', () =>
    window.scroll({ top: 0, left: 0, behavior: 'smooth' }),
  );
};

Weekub.prototype.showHideMenu = function (event) {
  event.stopPropagation();
  this.elements.toggleMenu.classList.toggle('nav-open');
  if (this.elements.burgerMenu.classList.contains('show')) {
    this.elements.burgerMenu.classList.remove('show');
    this.elements.burgerMenu.classList.add('hide');
    this.elements.burgerMenu.setAttribute('aria-expanded', false);
    this.elements.toggleMenu.setAttribute('aria-expanded', false);
  } else {
    this.elements.burgerMenu.classList.add('show');
    this.elements.burgerMenu.classList.remove('hide');
    this.elements.burgerMenu.setAttribute('aria-expanded', true);
    this.elements.toggleMenu.setAttribute('aria-expanded', true);
  }
};

Weekub.prototype.closeMenuOutSide = function (event) {
  event.stopPropagation();
  if (
    event.target !== this.elements.burgerMenu &&
    !event.target.classList.contains('burgermenu__list')
  ) {
    this.elements.burgerMenu.classList.add('hide');
    this.elements.burgerMenu.classList.remove('show');
    this.elements.burgerMenu.setAttribute('aria-expanded', false);
    this.elements.toggleMenu.classList.remove('nav-open');
  }
};

Weekub.prototype.navHighlighter = function () {
  /* Get current scroll position */
  let scrollY = window.scrollY;
  this.elements.sections.forEach((current) => {
    const sectionTop = current.getBoundingClientRect().top + scrollY - 150;
    const itemBurgerMenu = document.querySelector(
      `.burgermenu [data-id="${current.dataset.section}"`,
    );
    /* If current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it */
    if (scrollY > sectionTop && scrollY <= sectionTop + current.offsetHeight) {
      itemBurgerMenu.classList.add('active');
      itemBurgerMenu.setAttribute('aria-current', true);
    } else {
      itemBurgerMenu.classList.remove('active');
      itemBurgerMenu.setAttribute('aria-current', false);
    }
  });
};

Weekub.prototype.screenOrientation = function () {
  const portrait = window.matchMedia('(orientation: portrait)');
  portrait.addEventListener('change', (e) =>
    e.matches ? location.reload() : location.reload(),
  );
};

Weekub.prototype.animFlag = function () {
  requestAnimationFrame
}
console.log("Hello from Weekub.js!");