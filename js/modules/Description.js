<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f9bb528c1fdcadbc209bfdf9f35dc685c3f79e3c
export default class Description {
  constructor() {
    this.productName = document.querySelector('.goods-title');
    this.productImage = document.querySelector('.goods-large-img');
    this.backBtn = document.querySelector('.back-button');
    this.contactsBtn = document.querySelector('.contacts-btn');
  }

  getProduct() {
    if (this.productName === null && this.productName === null) {
      return false;
    } else {
      this.productName.textContent = localStorage.getItem('productTitle');
      this.productImage.src = localStorage.getItem('productImage');
    }

    if (this.backBtn === null) {
      return false; 
    } else {
      this.backBtn.addEventListener('click', () => {
        location.href = 'products.html';
      });
    }

    if(this.contactsBtn === null) {
      return false; 
    } else {
      this.contactsBtn.addEventListener('click', () => {
        location.href = 'contacts.html';
      });
    }
  }
<<<<<<< HEAD
=======
export default class Description {
  constructor() {
    this.productName = document.querySelector('.goods-title');
    this.productImage = document.querySelector('.goods-large-img');
    this.backBtn = document.querySelector('.back-button');
    this.contactsBtn = document.querySelector('.contacts-btn');
  }

  getProduct() {
    if (this.productName === null && this.productName === null) {
      return false;
    } else {
      this.productName.textContent = localStorage.getItem('productTitle');
      this.productImage.src = localStorage.getItem('productImage');
    }

    if (this.backBtn === null) {
      return false; 
    } else {
      this.backBtn.addEventListener('click', () => {
        location.href = 'products.html';
      });
    }

    if(this.contactsBtn === null) {
      return false; 
    } else {
      this.contactsBtn.addEventListener('click', () => {
        location.href = 'contacts.html';
      });
    }
  }
>>>>>>> 1b1815895a26b06b018887a51b56f3361af71b90
=======
>>>>>>> f9bb528c1fdcadbc209bfdf9f35dc685c3f79e3c
}