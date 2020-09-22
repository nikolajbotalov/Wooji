/**
 * The class displays the company's products
 * 
 * @author Nikolay Botalov <nikolaj.botalov@gmail.com> telegram <@nikolay696>
 */
export default class Products {
  constructor() {
    this.companyBtns = document.querySelector('.companies');
    this.products = document.querySelectorAll('.cards-products');
    this.checkboxes = document.querySelectorAll('input');
    this.sortedSection = document.querySelector('.sorted-product');
  } 
  
  /**
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

  showSortProduct(product, checkboxSelector) {
    this.hideCompanies();
    this.cancelChecked(); 

    let selector = '.' + product;
    const sortedProducts = document.querySelectorAll(`div${selector}`);
    sortedProducts.forEach(item => {
      this.sortedSection.appendChild(item);
      this.sortedSection.style.display = 'flex';
    });

    checkboxSelector.checked = true;
  }

  /**
   * method hide all company's products
   */
  hideCompanies() {
    this.products.forEach(product => {
      product.style.display = 'none';
    });
  }

  /**
   * method cancel checked all checkboxes;
   */
  cancelChecked() {
    this.checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  }

  /**
   *  main method for class
   */
  init() {
    
    // hide all company's products
    this.hideCompanies();
    this.cancelChecked();

    // show first company products
    const company = document.querySelector('.diaso');
    if (company === null) {
      return false;
    } else {
      company.style.display = 'flex';
    }

    // Сlick on the button, the company's products are displayed
    this.companyBtns.addEventListener('click', (e) => {
      let target = e.target; 

      this.showProducts(target.className);
    });

    // 
    this.products.forEach(productCard => {
      productCard.addEventListener('click', (e) => {
        let target = e.target;

        if (target.className === 'more-details-text') {
          let cardTitle = target.closest('.card-text').children[0].children[0].textContent;
          let cardImage = target.closest('.card').children[0].src;
          localStorage.setItem('productTitle', cardTitle);
          localStorage.setItem('productImage', cardImage);
          location.href = 'goodsDetails.html';
        }
      });
    });

    this.checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', (e) => {
        let target = e.target;

        this.showSortProduct(target.nextElementSibling.className, checkbox);
      })
    });
  }
}