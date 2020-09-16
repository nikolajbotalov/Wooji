export default class Slider {
  constructor(slides, dir) {
    this.slides = document.querySelectorAll(slides);
    this.slideIndex = 1; 
    this.dir = dir;
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach(slide => {
      slide.classList.add('animated');
      slide.style.display = 'none';
    });

    this.slides[this.slideIndex - 1].style.display = 'flex';
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  render() {
    this.showSlides(1);

    if (this.dir === 'horizontal') {
      setInterval(() =>{
        this.plusSlides(1);
        this.slides[this.slideIndex - 1].classList.add('fadeOutLeft');
      }, 3000);
    }

  }
}