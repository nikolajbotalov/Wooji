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
    company.style.display = 'flex';
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

      switch (target.className) {
        case 'companies-diaso':
          this.showProducts(target.className);
          break;
        case 'companies-gnk':
          this.showProducts(target.className);
          break;
        case 'companies-its':
          this.showProducts(target.className);
          break;
        case 'companies-lg':
          this.showProducts(target.className);
          break;
        case 'companies-natural_organic':
          this.showProducts(target.className);
          break;
        case 'companies-scott':
          this.showProducts(target.className);
          break;
        case 'companies-sandokkaebi': 
          this.showProducts(target.className);
          break;
        case 'companies-sdj': 
          this.showProducts(target.className);
          break;
        case 'companies-sugar_bubble':
          this.showProducts(target.className);
          break;
        case 'companies-life_workshop':
          this.showProducts(target.className);
          break;
        case 'companies-homesland':
          this.showProducts(target.className);
          break;           
        default:
          break;
      }
    });
  }
}