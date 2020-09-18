export default class Products {
  constructor(companySelector, productClass) {
    this.companyBtns = document.querySelector(companySelector);
    this.products = document.querySelectorAll(productClass);
  }

  showProducts() {
    const diaso = document.querySelector('.diaso');
    diaso.style.display = 'flex';
  }

  init() {
    this.companyBtns.addEventListener('click', (e) => {
      let target = e.target; 

      if (target.className === 'companies-diaso') {
        this.showProducts();
      }  
      // console.log('i')
    });
  }


}