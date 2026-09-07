$(document).ready(function () {
  // Initialize bulma-slider and bulma-carousel if present on the page.
  if (typeof bulmaSlider !== 'undefined') {
    bulmaSlider.attach();
  }
  if (typeof bulmaCarousel !== 'undefined') {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }
});
