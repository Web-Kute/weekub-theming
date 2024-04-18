import { customersItem } from './Customers';
import { skillItems } from './Skills';
export function Weekub() {
  this.registerElements();
  this.navHighlighter();
  this.screenOrientation();
  this.addCustomers();
  this.addSkills();
}

Weekub.prototype.registerElements = function () {
  this.elements = {
    skillsContainer: document.getElementById('skills-container'),
    sections: document.querySelectorAll('.section'),
    header: document.getElementById('header'),
    toggleMenu: document.querySelector('.togglemenu'),
    burgerMenu: document.querySelector('.burgermenu'),
    arrowUp: document.querySelector('.arrow-up'),
    customerContent: document.querySelector('.customers__content'),
    btnSwitchTheme: document.getElementById('theme-switcher'),
  };
};

Weekub.prototype.events = function () {
  this.elements.btnSwitchTheme.addEventListener(
    'change',
    this.theming.bind(this),
  );
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
    this.elements.burgerMenu.classList.remove('show', 'in');
    this.elements.burgerMenu.classList.add('out');
    this.elements.burgerMenu.setAttribute('aria-expanded', false);
    this.elements.toggleMenu.setAttribute('aria-expanded', false);
  } else {
    this.elements.burgerMenu.classList.add('show', 'in');
    this.elements.burgerMenu.classList.remove('hide', 'out');
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
    this.elements.burgerMenu.classList.add('out');
    this.elements.burgerMenu.classList.remove('show', 'in');
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
  requestAnimationFrame(() => {});
};

Weekub.prototype.addSkills = function () {
  skillItems.forEach((skill) => {
    this.elements.skillsContainer.innerHTML += `<div class="skills">
          <div class="skills__header">
            <h3 class="skills__title">${skill.title}</h3>
            <svg class="skills__icon svg" aria-hidden="true" focusable="false">
              ${skill.icon.map((icon) => `<use xlink:href="${icon}"></use>`)}
            </svg>
          </div>
          <ul>
            ${skill.description}
          </ul>
          <div class="skills__star">${skill.star}</div>
        </div>`;
  });
};

Weekub.prototype.addCustomers = function () {
  customersItem.forEach((customer) => {
    this.elements.customerContent.innerHTML += `<div class="customers__item">
      <figure aria-label="${customer.label}">
            <img src="${customer.imageURL}" alt="Vignette ${customer.label}" width="300" height="169" loading="lazy">
            <figcaption>${customer.label}</figcaption>
          </figure>
          <div class="customers__description">
            <h3 class="customers__title">${customer.title}</h3>
            <ul class="customers__summary">
              ${customer.description}
            </ul>
            <a class="customers__link" href="${customer.url}" target="_blank" rel="noopener"
              aria-label="Ouvrir le site dans un nouvel onglet">
              <svg class="customers__icon icon-alpha svg" aria-hidden="true" focusable="false">
                <use xlink:href="#link-ext"></use>
              </svg>
              <span class="customers__url">Ouvrir le site</span>
            </a>
          </div>
      </div>`;
  });
};

Weekub.prototype.theming = function () {
  document.body.classList.toggle('theme-light') !=
    document.body.classList.toggle('theme-dark');
};
