export default class Sertificates {
  constructor() {
    this.certSection = document.querySelector('.certificates-slider');
    this.bigImg = document.createElement('img');
    this.modal = document.querySelector('.modal');
    this.modalDialog = document.querySelector('.modal-dialog');
  }

  openBigImage() {
    if (this.certSection === null) {
      return false;
    } else {
      this.certSection.addEventListener('click', (e) => {
        let target = e.target;

        if (target.className === 'awards-slides') {
          let imgSrc = target.getAttribute('src');
          this.bigImg.classList.add('bigImage');
          this.bigImg.setAttribute('src', imgSrc.replace('mini', 'Big'));
          this.modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
          this.modalDialog.appendChild(this.bigImg);
        }
      });
    }

    this.modal.addEventListener('click', () => {
      this.bigImg.setAttribute('src', '');
      this.modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }
}
