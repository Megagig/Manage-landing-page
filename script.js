$('.testmonials-item').owlCarousel({
  items: 3,
  loop: true,
  autoplay: true,
  margin: 50,
  dots: true,
  arrows: true,
  nav: false,
  // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1,
      nav: true,
      loop: true,
    },
    600: {
      items: 2,
      nav: true,
      loop: true,
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
    },
  },
});
