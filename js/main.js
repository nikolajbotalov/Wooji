/**
 * @author Nikolay Botalov <nikolaj.botalov@gmail.com>
 */
window.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;
  let localServer = document.createElement("a");
  let gitPages = document.createElement("a");
  let products = document.querySelectorAll(".cards-products");
  let checkboxes = document.querySelectorAll("input");
  let filterSection = document.querySelector(".filtres");
  let filterTabs = document.querySelector(".filter-tabs");
  let companyBnt = document.querySelector(".companies");
  let largeDesiccant = document.querySelector("div.large-desiccant");
  let desiccant = document.querySelector("div.desiccant");
  let deodorant = document.querySelector("div.deodorant");
  let flavor = document.querySelector("div.flavor");
  let compound = document.querySelector("div.compound");
  let fruit_fly_trap = document.querySelector("div.fruit_fly_trap");
  let kitchen = document.querySelector("div.kitchen");
  let wardrobe = document.querySelector("div.wardrobe");
  let bathroom = document.querySelector("div.bathroom");
  let car = document.querySelector("div.car");
  let livingRoom = document.querySelector("div.living-room");

  function showRoomSlides(n) {
    let roomSlides = document.querySelectorAll(".room");

    if (n > roomSlides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = roomSlides.length;
    }

    for (let i = 0; i < roomSlides.length; i++) {
      roomSlides[i].style.display = "none";
    }

    if (roomSlides[slideIndex - 1] !== undefined) {
      roomSlides[slideIndex - 1].style.display = "flex";
    }
  }

  function plusRoomSlides(n) {
    showRoomSlides((slideIndex += n));
  }

  function renderRoomSlider() {
    if (document.documentElement.clientWidth <= 415) {
      let roomPrevBtn = document.querySelector(".room__prev-btn");
      let roomNextBtn = document.querySelector(".room__next-btn");

      showRoomSlides(slideIndex);

      if (roomPrevBtn !== null) {
        roomPrevBtn.addEventListener("click", function () {
          plusRoomSlides(-1);
        });

        roomNextBtn.addEventListener("click", function () {
          plusRoomSlides(1);
        });
      }
    }
  }

  function showAwardSlides(n) {
    let awardSlides = document.querySelectorAll(".awards-slides");

    if (n > awardSlides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = awardSlides.length;
    }

    for (let i = 0; i < awardSlides.length; i++) {
      awardSlides[i].style.display = "none";
    }

    if (awardSlides[slideIndex - 1] !== undefined) {
      awardSlides[slideIndex - 1].style.display = "flex";
    }
  }

  function plusAwardSlides(n) {
    showAwardSlides((slideIndex += n));
  }

  function renderAwardSlider() {
    if (document.documentElement.clientWidth < 415) {
      let awardPrevBtn = document.querySelector(".prev-btn");
      let awardNextBtn = document.querySelector(".next-btn");

      showAwardSlides(slideIndex);

      if (awardPrevBtn !== null) {
        awardPrevBtn.addEventListener("click", function () {
          plusAwardSlides(-1);
        });

        awardNextBtn.addEventListener("click", function () {
          plusAwardSlides(1);
        });
      }
    }
  }

  function openCertificates() {
    let certBtns = document.querySelectorAll(".attachment__btn");

    for (let i = 0; i < certBtns.length; i++) {
      certBtns[i].addEventListener("click", function (e) {
        let target = e.target;

        if (target.className === 'attachment__btn-text') {
          if (target.parentNode.classList[1] === 'cert-one') {
            window.open('images/lab_certs/first/1.pdf');
          } else if (target.parentNode.classList[1] === "cert-two") {
            window.open('images/lab_certs/second/1.pdf');
          } else if (target.parentNode.classList[1] === "cert-three") {
            window.open('images/lab_certs/third/1.pdf');
          } 
        } else {
          if (target.classList[1] === 'cert-one') {
            window.open('images/lab_certs/first/1.pdf');
          } else if (target.classList[1] === "cert-two") {
            window.open('images/lab_certs/second/1.pdf');
          } else if (target.classList[1] === "cert-three") {
            window.open('images/lab_certs/third/1.pdf');
          } 
        }
      });
    }
  }

  function openPopup() {
    let awardSection = document.querySelector(".certificates-slider");
    let bigImage = document.createElement("img");
    let modalPopup = document.querySelector(".modal");
    let modalDialog = document.querySelector(".modal-dialog");

    if (awardSection !== null) {
      awardSection.addEventListener("click", function (e) {
        let target = e.target;
        if (target.className === "awards-slides") {
          let imgSrc = target.getAttribute("src");

          bigImage.classList.add("bigImage");
          bigImage.setAttribute("src", imgSrc.replace("mini", "Big"));
          modalPopup.style.display = "block";
          document.body.style.overflow = "hidden";
          modalDialog.appendChild(bigImage);
        }
      });
    }

    if (modalPopup !== null) {
      modalPopup.addEventListener("click", function () {
        bigImage.setAttribute("src", "");
        modalPopup.style.display = "none";
        document.body.style.overflow = "";
      });
    }
  }

  function getRoomTitle() {
    localServer = "http://127.0.0.1:5500/index.html";
    gitPages = "https://nikolajbotalov.github.io/Wooji/index.html";

    if (location.href === localServer || location.href === gitPages) {
      let roomBtnContainer = document.querySelector(".advantages-container");

      roomBtnContainer.addEventListener("click", function (e) {
        let target = e.target;
        if (target.className === "room-image") {
          let roomTitle = target.nextElementSibling.children[0].textContent;

          sessionStorage.setItem("roomTitle", roomTitle);
          location.href = "products.html";
        } else if (target.className === "room-btn-title") {
          let parent = target.parentNode.parentNode.parentNode;
          let roomTitle = parent.children[1].children[0].textContent;

          sessionStorage.setItem("roomTitle", roomTitle);
          location.href = "products.html";
        } else if (target.className === "room-view-products-btn") {
          let parent = target.parentNode.parentNode;
          let roomTitle = parent.children[1].children[0].textContent;

          sessionStorage.setItem("roomTitle", roomTitle);
          location.href = "products.html";
        }
      });
    }
  }

  function hideCompanies() {
    for (let i = 0; i < products.length; i++) {
      products[i].style.display = "none";
    }
  }

  function cancelCheckboxes() {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }

  function showProducts(productSelector) {
    let product = "." + productSelector;
    let company = document.querySelector(product);

    hideCompanies();
    cancelCheckboxes();

    if (company !== null) {
      company.style.display = "flex";
    } else {
      return false;
    }
  }

  function showSortProduct(productSelector, checkboxSelector) {
    let sortedProduct = document.querySelector("div." + productSelector);

    hideCompanies();
    cancelCheckboxes();

    if (sortedProduct !== null) {
      sortedProduct.style.display = "flex";
    } else {
      return false;
    }

    checkboxSelector.checked = true;
  }

  function checkActivefilter() {
    let roomTitle = sessionStorage.getItem("roomTitle");

    if (sessionStorage.getItem("roomTitle") === null) {
      hideCompanies();
      cancelCheckboxes();
    } else if (sessionStorage.getItem("roomTitle") === "diaso") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else if (sessionStorage.getItem("roomTitle") === "gnk") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else if (sessionStorage.getItem("roomTitle") === "its") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else if (sessionStorage.getItem("roomTitle") === "lg") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else if (sessionStorage.getItem("roomTitle") === "natural_organic") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else if (sessionStorage.getItem("roomTitle") === "scott") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else if (sessionStorage.getItem("roomTitle") === "sdj") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else if (sessionStorage.getItem("roomTitle") === "sugar_bubble") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else if (sessionStorage.getItem("roomTitle") === "life_workshop") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else if (sessionStorage.getItem("roomTitle") === "homesland") {
      showProducts(sessionStorage.getItem("roomTitle"));
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
        let checkboxName = checkboxes[i].nextElementSibling.textContent;

        if (sessionStorage.getItem("roomTitle") === checkboxName) {
          let checkboxClass = checkboxes[i].nextElementSibling.className;

          showSortProduct(checkboxClass, checkboxes[i]);
        }
      }
    }
  }

  function showFilterBlock() {
    filterTabs.children[0].style.display = "flex";
    filterTabs.children[1].style.display = "none";
  }

  function showRoomBlock() {
    filterTabs.children[0].style.display = "none";
    filterTabs.children[1].style.display = "flex";
  }

  function showCurrentFilterBlock() {
    if (filterSection === null) {
      return false;
    } else {
      if (sessionStorage.getItem("roomTitle") !== null) {
        showRoomBlock();
      } else {
        showFilterBlock();
      }

      filterSection.addEventListener("click", function (e) {
        let target = e.target;
        console.log(target);
        if (target.className === "filters-title") {
          showFilterBlock();
        } else if (target.className === "room-filter") {
          showRoomBlock();
        }
      });
    }
  }

  renderRoomSlider();
  renderAwardSlider();
  openPopup();
  openCertificates();
  getRoomTitle();
  checkActivefilter();

  if (document.documentElement.clientWidth <= 415) {
    showCurrentFilterBlock();
  }

  if (companyBnt !== null) {
    companyBnt.addEventListener("click", function (e) {
      let target = e.target;

      sessionStorage.setItem("roomTitle", target.className.slice(10));
      showProducts(target.className.slice(10));
    });
  }

  for (let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", function (e) {
      let target = e.target;

      if (target.className === "card-image") {
        let cardTitle =
          target.nextElementSibling.children[0].children[0].textContent;
        let cardDesc =
          target.nextElementSibling.children[0].children[1].innerHTML;
        let cardImage = target.src;
        console.log(cardTitle);
        sessionStorage.setItem("productTitle", cardTitle);
        sessionStorage.setItem("productDesc", cardDesc);
        sessionStorage.setItem("productImage", cardImage);
        location.href = "goodsDetails.html";
      } else if (target.className === "more-details-text") {
        let parent = target.parentNode.parentNode.parentNode;
        let cardTitle = parent.children[0].children[0].textContent;
        let cardDesc = parent.children[0].children[1].textContent;
        let cardImage = parent.parentNode.children[0].src;

        sessionStorage.setItem("productTitle", cardTitle);
        sessionStorage.setItem("productDesc", cardDesc);
        sessionStorage.setItem("productImage", cardImage);
        location.href = "goodsDetails.html";
      } else if (target.className === "more-details") {
        let parent = target.parentNode.parentNode.parentNode;
        let cardTitle = parent.children[1].children[0].children[0].textContent;
        let cardDesc = parent.children[1].children[0].children[1].textContent;
        let cardImage = parent.children[0].src;
        console.log(cardImage);

        sessionStorage.setItem("productTitle", cardTitle);
        sessionStorage.setItem("productDesc", cardDesc);
        sessionStorage.setItem("productImage", cardImage);
        location.href = "goodsDetails.html";
      }
    });
  }

  for (let i = 0; i < checkboxes.length; i++) {
    let filterName = checkboxes[i].nextElementSibling;
    let filterClass = filterName.className;

    if (filterClass === "large-desiccant") {
      filterName.textContent += " (" + largeDesiccant.childElementCount + ")";
    } else if (filterClass === "desiccant") {
      filterName.textContent += " (" + desiccant.childElementCount + ")";
    } else if (filterClass === "deodorant") {
      filterName.textContent += " (" + deodorant.childElementCount + ")";
    } else if (filterClass === "flavor") {
      filterName.textContent += " (" + flavor.childElementCount + ")";
    } else if (filterClass === "compound") {
      filterName.textContent += " (" + compound.childElementCount + ")";
    } else if (filterClass === "fruit_fly_trap") {
      filterName.textContent += " (" + fruit_fly_trap.childElementCount + ")";
    } else if (filterClass === "kitchen") {
      filterName.textContent += " (" + kitchen.childElementCount + ")";
    } else if (filterClass === "wardrobe") {
      filterName.textContent += " (" + wardrobe.childElementCount + ")";
    } else if (filterClass === "bathroom") {
      filterName.textContent += " (" + bathroom.childElementCount + ")";
    } else if (filterClass === "car") {
      filterName.textContent += " (" + car.childElementCount + ")";
    } else if (filterClass === "living-room") {
      filterName.textContent += " (" + livingRoom.childElementCount + ")";
    }

    checkboxes[i].addEventListener("click", function (e) {
      let target = e.target;

      sessionStorage.setItem("roomTitle", filterName.textContent.split(" ")[0]);
      showSortProduct(target.nextElementSibling.className, target);
    });
  }

  function getProductInfo() {
    let productName = document.querySelector(".goods-title");
    let productDesc = document.querySelector(".goods-description");
    let productImage = document.querySelector(".goods-large-img");
    let backBtn = document.querySelector(".back-button");
    let contactsBnt = document.querySelector(".contacts-btn");

    if (productName !== null && productDesc !== null && productImage !== null) {
      productName.textContent = sessionStorage.getItem("productTitle");
      productDesc.textContent = sessionStorage.getItem("productDesc");
      productImage.src = sessionStorage.getItem("productImage");
    }

    if (backBtn !== null) {
      backBtn.addEventListener("click", function () {
        location.href = "products.html";
      });
    }

    if (contactsBnt !== null) {
      contactsBnt.addEventListener("click", function () {
        location.href = "contacts.html";
      });
    }
  }

  getProductInfo();
});
