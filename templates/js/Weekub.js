import { customersItem } from './Customers';
import { skillItems } from './Skills';
import { getSortedCustomers } from './Customers';
// import { initGSAP } from '.gsap';
export function Weekub() {
  this.registerElements();
  this.navHighlighter();
  this.screenOrientation();
  this.addContent(
    this.elements.skillsContainer,
    skillItems,
    this.generateSkillHTML
  );
  const sortedCustomers = getSortedCustomers();
  this.addContent(
    this.elements.customerContent,
    sortedCustomers,
    this.generateCustomerHTML
    // this.displayCustomers.bind(this)
  );
  this.heightSizeContact();
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
    sectionContact: document.getElementById('contact'),
  };
};

Weekub.prototype.events = function () {
  this.addEvent(
    this.elements.btnSwitchTheme,
    'change',
    this.theming.bind(this)
  );
  this.addEvent(document, 'click', this.closeMenuOutSide.bind(this));
  this.addEvent(window, 'scroll', this.navHighlighter.bind(this));
  this.addEvent(
    this.elements.toggleMenu,
    'click',
    this.showHideMenu.bind(this)
  );
  this.addEvent(this.elements.arrowUp, 'click', () =>
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  );
};

Weekub.prototype.addEvent = function (element, event, handler) {
  if (
    element &&
    typeof element.addEventListener === 'function' &&
    typeof handler === 'function'
  ) {
    element.addEventListener(event, handler);
  }
};

Weekub.prototype.showHideMenu = function (event) {
  event.stopPropagation();
  const isOpen = this.elements.burgerMenu.classList.contains('show');
  this.toggleMenuClasses(
    this.elements.toggleMenu,
    this.elements.burgerMenu,
    isOpen
  );
};

Weekub.prototype.closeMenuOutSide = function (event) {
  event.stopPropagation();
  if (
    event.target !== this.elements.burgerMenu &&
    !event.target.classList.contains('burgermenu__list')
  ) {
    if (this.elements.burgerMenu.classList.contains('show')) {
      this.toggleMenuClasses(
        this.elements.toggleMenu,
        this.elements.burgerMenu,
        true
      );
    }
  }
};

Weekub.prototype.toggleMenuClasses = function (
  toggleMenu,
  burgerMenu,
  close = false
) {
  toggleMenu.classList.toggle('nav-open', !close);
  burgerMenu.classList.toggle('show', !close);
  burgerMenu.classList.toggle('in', !close);
  burgerMenu.classList.toggle('out', close);
  burgerMenu.setAttribute('aria-expanded', !close);
  toggleMenu.setAttribute('aria-expanded', !close);
};

Weekub.prototype.navHighlighter = function () {
  let scrollY = window.scrollY;
  this.elements.sections.forEach((current) => {
    const sectionTop = current.getBoundingClientRect().top + scrollY - 150;
    const itemBurgerMenu = document.querySelector(
      `.burgermenu [data-id="${current.dataset.section}"]`
    );
    const isActive =
      scrollY > sectionTop && scrollY <= sectionTop + current.offsetHeight;
    itemBurgerMenu.classList.toggle('active', isActive);
    itemBurgerMenu.setAttribute('aria-current', isActive);
  });
};

Weekub.prototype.screenOrientation = function () {
  const portrait = window.matchMedia('(orientation: portrait)');
  portrait.addEventListener('change', () => location.reload());
};

Weekub.prototype.addContent = function (container, items, generateHTML) {
  if (
    !container ||
    !Array.isArray(items) ||
    typeof generateHTML !== 'function'
  ) {
    return;
  }
  container.innerHTML += items.map(generateHTML).join('');
};

Weekub.prototype.generateSkillHTML = function (skill) {
  let x = 0;
  return `<div class="skills">
    <div class="skills__header">
      <h3 class="skills__title">${skill.title}</h3>
      <svg class="skills__icon svg" aria-hidden="true" focusable="false">
        ${skill.icon.map((icon, i) => `<use x="${i !== 0 ? (x -= 30) : (x = 0)}" xlink:href="${icon}"></use>`).join('')}
      </svg>
    </div>
    <ul>${skill.description}</ul>
    <div class="skills__star">${skill.star}</div>
  </div>`;
};

Weekub.prototype.generateCustomerHTML = function (customer) {
  return `<div class="customers__item">
    <figure aria-label="${customer.label}">
      <img src="${customer.imageURL}" alt="Vignette ${customer.label}" width="300" height="169" loading="lazy">
      <figcaption>${customer.label}</figcaption>
    </figure>
    <div class="customers__description">
      <h3 class="customers__title">${customer.title}</h3>
      <ul>${customer.description}</ul>
      <a class="customers__link" href="${customer.url}" target="_blank" rel="noopener" aria-label="Ouvrir le site dans un nouvel onglet">
        <svg class="customers__icon icon-alpha svg" aria-hidden="true" focusable="false">
          <use xlink:href="#link-ext"></use>
        </svg>
        <span class="customers__url">Ouvrir le site</span>
      </a>
    </div>
  </div>`;
};

Weekub.prototype.theming = function () {
  const isLight = document.body.classList.toggle('theme-light');
  document.body.classList.toggle('theme-dark', !isLight);
};

Weekub.prototype.heightSizeContact = function () {
  const footerHeight = 140;
  const heights = [document.documentElement.clientHeight, window.innerHeight];
  const maxHeight = Math.max(...heights);
  let vh = maxHeight;
  if (vh > 0) {
    const contactSectionFullHeight =
      this.elements.sectionContact.getBoundingClientRect().height;
    this.elements.sectionContact.style.paddingBottom =
      vh - contactSectionFullHeight - footerHeight + 'px';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const text = document.querySelector('h2.animate-text');
  const cursorElement = document.querySelector('h2.animate-text::after');
  // const textArr = document.querySelector('h2.animate-text::after');
  // text.style.opacity = 0;
  //  cursorElement.style.display = 'none';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    text.textContent = 'HTML / CSS / JS';
    return;
    // Exit if user prefers reduced motion
  } else {
    gsap.registerPlugin(TextPlugin);

    const textArr = [
      'HTML/CSS/JS',
      'WordPress',
      'Bootstrap 5',
      'Responsive',
      'Accessibilité',
      'UX & UI Design',
      'SEO naturel',
    ];

    const getAnimFromIndex = (index) => ({
      duration: 1.5,
      repeat: 1,
      repeatDelay: 2.2,
      yoyo: true,
      text: {
        //this is the code that replaces the text
        value: textArr[index],
        delimiter: '',
      },
      ease: 'ease.in',
    });

    const getKeyFrames = () => {
      const keyframes = [];
      for (let i = 0; i < textArr.length; i++) {
        keyframes.push(getAnimFromIndex(i));
      }
      return keyframes;
    };

    const tl1 = gsap.timeline();

    tl1.to('span.cursor', {
      keyframes: getKeyFrames(),
      repeat: -1,
    });

    //cursor logic
    //blink only when not typing or deleting

    const tl2 = gsap.timeline();

    tl2.to('.animate-text', {
      keyframes: [
        { '--typeCursorOpacity': 1, duration: 1, delay: 0 },
        { '--typeCursorOpacity': 0, duration: 0, delay: 0.5 },
        { '--typeCursorOpacity': 1, duration: 0, delay: 0.5 },
        { '--typeCursorOpacity': 0, duration: 0, delay: 0.5 },
        { '--typeCursorOpacity': 1, duration: 0, delay: 0.5 },
        { '--typeCursorOpacity': 1, duration: 1, delay: 0 },
      ],
      repeat: -1,
    });
  }
});
