import Products from './modules/Products.js';

/**
 * @author Nikolay Botalov <nikolaj.botalov@gmail.com> telegram <@nikolay696>
 */
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const products = new Products('.companies', '.cards-products');
  products.init();
});