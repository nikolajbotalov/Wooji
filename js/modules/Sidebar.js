export default class Sidebar {
  constructor() {
    this.mainPageMenu = document.querySelector(".main-page__menu");
    this.sidebarMenu = document.querySelector(".sidebar-menu");
    this.menuBtn = document.querySelector(".menu-btn");
    this.sidebarPanel = document.querySelector(".menu-link");
  }

  init() {
    console.log(this.menuBtn);

    if (document.documentElement.clientWidth > 375) {
      this.mainPageMenu.style.display = "flex";
    } else {
      this.sidebarMenu.style.display = "flex";
    }

    this.menuBtn.addEventListener("click", () => {

      if (this.menuBtn.style.left === '-100px') {
        this.menuBtn.style.left = "0px";
        this.sidebarPanel.style.left = "375px";
      } else {
        this.menuBtn.style.left = "-100px";
        this.sidebarPanel.style.left = "275px";
  
      }
    });
    // this.showMenu);
  }

  showMenu() {
    // this.menuBtn.style.left = '-100px';
    // this.sidebarPanel.style.left = '275px';
  }
}
