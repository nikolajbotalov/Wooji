/**
 * The class displays the company's products
 *
 * @author Nikolay Botalov <nikolaj.botalov@gmail.com> telegram <@nikolay696>
 */
export default class Products {
  constructor() {
    this.companyBtns = document.querySelector(".companies");
    this.products = document.querySelectorAll(".cards-products");
    this.checkboxes = document.querySelectorAll("input");
    this.filterBlocks = document.querySelectorAll(".filter");
    this.largeDesiccant = document.querySelector("div.large-desiccant");
    this.desiccant = document.querySelector("div.desiccant");
    this.deodorant = document.querySelector("div.deodorant");
    this.flavor = document.querySelector("div.flavor");
    this.compound = document.querySelector("div.compound");
    this.fruit_fly_trap = document.querySelector("div.fruit_fly_trap");
    this.kitchen = document.querySelector("div.kitchen");
    this.wardrobe = document.querySelector("div.wardrobe");
    this.bathroom = document.querySelector("div.bathroom");
    this.car = document.querySelector("div.car");
    this.livingRoom = document.querySelector("div.living-room");
    this.local = document.createElement("a");
    this.git = document.createElement("a");
    this.filterSection = document.querySelector(".filtres");
    this.filterTabs = document.querySelector(".filter-tabs");
  }

  /**
   * @param {string} product - class name of company's product;
   */
  showProducts(product) {
    this.hideCompanies();
    let selector = "." + product.slice(10);
    const company = document.querySelector(selector);
    if (company !== null) {
      company.style.display = "flex";
    } else {
      return false;
    }
  }

  /**
   * @param {string} product - class name sorted products
   * @param {checkbox} checkboxSelector - current checkbox
   */
  showSortProduct(product, checkboxSelector) {
    const sortedProducts = document.querySelector(`div.${product}`);

    this.hideCompanies();
    this.cancelChecked();

    if (sortedProducts !== null) {
      sortedProducts.style.display = "flex";
    } else {
      console.log("false");
      return false;
    }

    checkboxSelector.checked = true;
  }

  /**
   * method hide all company's products
   */
  hideCompanies() {
    this.products.forEach((product) => {
      product.style.display = "none";
    });
  }

  /**
   * method cancel checked all checkboxes;
   */
  cancelChecked() {
    this.checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  /**
   * method set to display first checkbox block by default
   * click to filter's name show checkboxes block
   */
  showCurrentFilterBlock() {
    if (this.filterSection === null) {
      return false;
    } else {
      this.filterTabs.children[1].style.display = "none";
      this.filterSection.addEventListener("click", (e) => {
        let target = e.target;

        if (target.className === "filters-title") {
          this.filterTabs.children[0].style.display = "flex";
          this.filterTabs.children[1].style.display = "none";
        } else if (target.className === "room-filter") {
          this.filterTabs.children[1].style.display = "flex";
          this.filterTabs.children[0].style.display = "none";
        }
      });
    }
  }

  /**
   * method check 
   */
  checkPage() {
    if (sessionStorage.getItem("roomTitle") === null) {
      this.hideCompanies();
      this.cancelChecked();
    } else {
      this.checkboxes.forEach((checkbox) => {
        let checkboxName = checkbox.nextElementSibling.textContent;

        if (sessionStorage.getItem("roomTitle") === checkboxName) {
          let checkboxClass = checkbox.nextElementSibling.className;
          this.showSortProduct(checkboxClass, checkbox);
        }
      });
    }
  }

  /**
   *  main method for class
   */
  init() {
    // if loc.href = index.html and click to room card,
    // room title save to localStorage
    this.local = "http://127.0.0.1:5500/index.html";
    this.git = "https://nikolajbotalov.github.io/Wooji/index.html";
    if (location.href === this.local || location.href === this.git) {
      const roomBtn = document.querySelector(".advantages-container");
      roomBtn.addEventListener("click", (e) => {
        let target = e.target;
        if (target.className == "room-image") {
          let roomTitle = target.nextElementSibling.children[0].textContent;
          sessionStorage.setItem("roomTitle", roomTitle);
          location.href = "products.html";
        } else if (target.className === "room-btn-title") {
          let roomTitle = target.closest(".card-room").children[1].children[0].textContent;
          sessionStorage.setItem("roomTitle", roomTitle);
          location.href = "products.html";
        }
      });
    }

    this.checkPage();

    if (document.documentElement.clientWidth <= 415) {
      this.showCurrentFilterBlock();
    }

    // Сlick on the button, the company's products are displayed
    if (this.companyBtns !== null) {
      this.companyBtns.addEventListener("click", (e) => {
        let target = e.target;
        let selector = target.className.slice(10);

        this.showProducts(target.className);
        localStorage.setItem("currentProducts", selector);
      });
    }

    // Click on product card
    this.products.forEach((productCard) => {
      productCard.addEventListener("click", (e) => {
        let target = e.target;

        // if click on card image, set product name and image
        if (target.className === "card-image") {
          let cardTitle = target.nextElementSibling.children[0].children[0].textContent;
          let cardDesc = target.nextElementSibling.children[0].children[1].textContent;
          let cardImage = target.src;

          localStorage.setItem("productTitle", cardTitle);
          localStorage.setItem("productDesc", cardDesc);
          localStorage.setItem("productImage", cardImage);
          location.href = "goodsDetails.html";
        } else if (target.className === "more-details-text") {
          let cardTitle = target.closest(".card-text").children[0].children[0].textContent;
          let cardDesc = target.closest(".card-text").children[0].children[1].textContent;
          let cardImage = target.closest(".card").children[0].src;

          localStorage.setItem("productTitle", cardTitle);
          localStorage.setItem("productDesc", cardDesc);
          localStorage.setItem("productImage", cardImage);
          location.href = "goodsDetails.html";
        }
      });
    });

    //
    this.checkboxes.forEach((checkbox) => {
      if (checkbox.nextElementSibling.className === "large-desiccant") {
        checkbox.nextElementSibling.textContent += ` (${this.largeDesiccant.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "desiccant") {
        checkbox.nextElementSibling.textContent += ` (${this.desiccant.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "deodorant") {
        checkbox.nextElementSibling.textContent += ` (${this.deodorant.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "flavor") {
        checkbox.nextElementSibling.textContent += ` (${this.flavor.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "compound") {
        checkbox.nextElementSibling.textContent += ` (${this.compound.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "fruit_fly_trap") {
        checkbox.nextElementSibling.textContent += ` (${this.fruit_fly_trap.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "kitchen") {
        checkbox.nextElementSibling.textContent += ` (${this.kitchen.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "wardrobe") {
        checkbox.nextElementSibling.textContent += ` (${this.wardrobe.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "bathroom") {
        checkbox.nextElementSibling.textContent += ` (${this.bathroom.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "car") {
        checkbox.nextElementSibling.textContent += ` (${this.car.childElementCount})`;
      } else if (checkbox.nextElementSibling.className === "living-room") {
        checkbox.nextElementSibling.textContent += ` (${this.livingRoom.childElementCount})`;
      }

      checkbox.addEventListener("click", (e) => {
        let target = e.target;
        this.showSortProduct(target.nextElementSibling.className, checkbox);
        localStorage.setItem("currentProducts", target.nextElementSibling.className);
      });
    });
  }
}
