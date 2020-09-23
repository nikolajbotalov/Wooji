import Products from './modules/Products.js';
import Sertificates from './modules/Sertificates.js';
import Description from './modules/Description.js';
// import Sidebar from './modules/Sidebar.js';

/**
 * @author Nikolay Botalov <nikolaj.botalov@gmail.com>
 */
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // const sidebar = new Sidebar();
  // sidebar.init();

  const products = new Products();
  products.init();

  const sertificates = new Sertificates();
  sertificates.openBigImage();

  const productDescription = new Description();
  productDescription.getProduct();
});