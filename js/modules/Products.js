/**
 * The class displays the company's products
 * 
 * @author Nikolay Botalov <nikolaj.botalov@gmail.com> telegram <@nikolay696>
 */
export default class Products {
  /**
   * Class constructor
   * 
   * @param {string} companySelector - block company
   * @param {string} productsSelector - block's products
   */
  constructor(companySelector, productsSelector) {
    this.companyBtns = document.querySelector(companySelector);
    this.products = document.querySelectorAll(productsSelector);
  } 
  
  /**
   * 
   * @param {string} product - class name of company's product;
   */
  showProducts(product) {
    this.hideCompanies();
    let selector = '.' + product.slice(10); 
    const company = document.querySelector(selector);
    if (company !== null) {
      company.style.display = 'flex';
    } else {
      return false;
    }
  }

  /**
   * hide all company's products
   */
  hideCompanies() {
    this.products.forEach(product => {
      product.style.display = 'none';
    });
  }

  /**
   *  main method for class
   */
  init() {
    
    // hide all company's products
    this.hideCompanies();

    // show first company products
    const company = document.querySelector('.diaso');
    company.style.display = 'flex';
    
    // Сlick on the button, the company's products are displayed
    this.companyBtns.addEventListener('click', (e) => {
      let target = e.target; 
      console.log(target);

      this.showProducts(target.className);
    });
  }
}