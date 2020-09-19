export default class Products {
  constructor(companySelector, productsSelector) {
    this.products = document.querySelectorAll(productsSelector);
    this.companyBtns = document.querySelector(companySelector);
  } 

  showProducts(product) {
    this.hideCompanies();
    let selector = '.' + product.slice(10); 
    const company = document.querySelector(selector);
    company.style.display = 'flex';
  }

  hideCompanies() {
    this.products.forEach(product => {
      product.style.display = 'none';
    });
  }

  init() {
    this.hideCompanies();
    
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
          this.showProducts('.companies-diaso');
          break;
      }
    });
  }
}