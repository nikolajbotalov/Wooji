export default class Advantages {
  constructor() {
    this.slides = document.querySelectorAll('.room');
    this.slideIndex = 1;
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });

    if (this.slides[this.slideIndex - 1] === undefined) {
      return false;
    } else {
      this.slides[this.slideIndex - 1].style.display = 'flex';
    }
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  
  init() {
    if (document.documentElement.clientWidth <= 415) {
      this.showSlides(this.slideIndex);

      try {
        const prevBtn = document.querySelector('.room__prev-btn');
        const nextBtn = document.querySelector('.room__next-btn');

        prevBtn.addEventListener('click', () => {
          this.plusSlides(-1);
        });

        nextBtn.addEventListener('click', () => {
          this.plusSlides(1);
        });
      } catch (e) {
        
      }
    }
  }
}