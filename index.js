import "./templates/scss/styles.scss";
import { Weekub } from './templates/js/Weekub';

const Masonry = require('masonry-layout');
// https://masonry.desandro.com/

document.addEventListener('DOMContentLoaded', function () {
  const weekub = new Weekub();
  const masonry = new Masonry('#skills-container', {
    itemSelector: '.skills',
    columnWidth: '.grid-sizer',
    gutter: 20,
    percentPosition: true,
  });
  weekub.events();
});
