var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

window.sr = ScrollReveal();

sr.reveal('#introID', {
  duration: 2000,
  origin: 'bottom',
  distance: '-100px'
});

sr.reveal('#aboutID', {
  duration: 3000,
  origin: 'bottom',
  distance: '-100px'
});

sr.reveal('#productsID', {
  duration: 3000,
  origin: 'left',
  distance: '-100px'
});

sr.reveal('#locationID', {
  duration: 3000,
  origin: 'right',
  distance: '-100px'
});

sr.reveal('#visionID', {
  duration: 3000,
  origin: 'right',
  distance: '-100px'
});

