import Products from './modules/Products.js';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const products = new Products('.companies', '.products');

  products.init();
});