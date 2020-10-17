export default class Description {
  constructor() {
    this.productName = document.querySelector('.goods-title');
    this.productDesc = document.querySelector('.goods-description');
    this.productImage = document.querySelector('.goods-large-img');
    this.backBtn = document.querySelector('.back-button');
    this.contactsBtn = document.querySelector('.contacts-btn');
  }

  getProduct() { 
    if (this.productName === null && 
        this.productImage === null && 
        this.productDesc === null) {
      return false;
    } else {
      // productName & productImage gets value from localstorage
      this.productName.textContent = sessionStorage.getItem('productTitle');
      this.productDesc.innerHTML = sessionStorage.getItem('productDesc');
      this.productImage.src = sessionStorage.getItem('productImage');
    }

    if (this.backBtn === null) {
      return false;
    } else {
      // if click back button, redirect to product page 
      this.backBtn.addEventListener('click', () => {
        location.href = 'products.html';
      });
    }

    if(this.contactsBtn === null) {
      return false; 
    } else {
      // if click contacts button, redirect to contacts page 
      this.contactsBtn.addEventListener('click', () => {
        location.href = 'contacts.html';
      });
    }
  }
}