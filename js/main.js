import Products from './modules/Products.js';
import Sertificates from './modules/Sertificates.js';
import Description from './modules/Description.js';
import Slider from './modules/Slider.js';
import Advantages from './modules/Advantages.js';

/**
 * @author Nikolay Botalov <nikolaj.botalov@gmail.com>
 */
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const products = new Products();
  products.init();

  const sertificates = new Sertificates();
  sertificates.openBigImage();

  const slider = new Slider();
  slider.init();

  const advantagesSlider = new Advantages();
  advantagesSlider.init(); 

  const productDescription = new Description();
  productDescription.getProduct();
});



