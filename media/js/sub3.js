//text scroll
gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.p1');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 200%',
      end: 'top 35%',
      scrub: true,
    },
  });
});



//팝업
$(document).ready(function() {
  $('.popup-youtube').magnificPopup({
      disableOn: 320,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false
  });
});
