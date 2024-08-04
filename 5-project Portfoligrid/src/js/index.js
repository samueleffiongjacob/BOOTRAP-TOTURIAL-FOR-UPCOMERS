// JavaScript to set dynamic year 

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});





// light boox

const options = {
    keyboard: true,
    size: 'fullscreen'
};



document.querySelectorAll('[data-gallery="img-gallery"]').forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    const lightbox = new Lightbox(el, {
      constrain: true,
      size: 'lg',
    });
    lightbox.show();
}));
