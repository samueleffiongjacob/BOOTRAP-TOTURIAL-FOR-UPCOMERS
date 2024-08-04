// JavaScript to set dynamic year 

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

// Autoplay video on modal open online video

// $(document).on('click', '[data-bs-toggle="modal"]', function () {
//   let videoSrc = $(this).attr('data-video');
//   let videoModal = $(this).data('bs-target');
//   $(videoModal + ' iframe').attr('src', videoSrc + "?autoplay=1");
// });

// Stop video playback on modal close online video

// $(document).on('hidden.bs.modal', function (e) {
//   let $iframe = $(e.target).find('iframe');
//   $iframe.attr('src', $iframe.attr('src').replace("?autoplay=1", ""));
// });



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


// of line video


// Autoplay video on modal open
document.addEventListener('shown.bs.modal', function (event) {
    let modal = event.target;
    let video = modal.querySelector('video');
    if (video) {
      video.play();
    }
});
  
// Stop video playback on modal close
document.addEventListener('hidden.bs.modal', function (event) {
    let modal = event.target;
    let video = modal.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video to the beginning
    }
});
  

// testimonial slidder
$(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      speed: 600, // smooth scroll transsition
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true, // Enable auto slide
      autoplaySpeed: 2000 // Set auto slide interval to 2000 milliseconds (2 seconds)
    });
  });