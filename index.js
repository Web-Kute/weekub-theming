import "./templates/scss/styles.scss";
import { Weekub } from './templates/js/Weekub';
import { Cloudinary } from '@cloudinary/url-gen';
const cld = new Cloudinary({ cloud: { cloudName: 'dwwhn7b5v' } });
// Import any actions required for transformations.
import { fill } from '@cloudinary/url-gen/actions/resize';
// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
const myImage = cld.image('docs/models');

// Resize to 250 x 250 pixels using the 'fill' crop mode.
myImage.resize(fill().width(300).height(169));

// Render the image in an 'img' element.
// const imgElement = document.createElement('img');
// document.body.appendChild(imgElement);
// imgElement.src = myImage.toURL();

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
