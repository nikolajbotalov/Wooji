export default class Slider {
  constructor() {
    this.slides = document.querySelectorAll(".awards-slides");
    this.slideIndex = 1;
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });

    if (this.slides[this.slideIndex - 1] === undefined) {
      return false;
    } else {
      this.slides[this.slideIndex - 1].style.display = "block";
    }

  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  init() {
    if (document.documentElement.clientWidth <= 415) {
      this.showSlides(this.slideIndex);

      try {
        const nextBtn = document.querySelector(".next-btn");
        const prevBtn = document.querySelector(".prev-btn");

        prevBtn.addEventListener('click', () => {
          this.plusSlides(-1);
        });

        nextBtn.addEventListener('click', () => {
          this.plusSlides(1);
        });
      } catch (e) {}
    }
  }
}
