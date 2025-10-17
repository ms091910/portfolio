var headline = $(".h2");
var char = '[class*="char"]';

var tl = new TimelineLite();

// Using lettering.js to wrap a <span> around each word and a <span> around each character.
headline
  .lettering('words')
  .children('span').lettering();

// Stagger letter animation
tl.staggerFrom(char, 1, {
  opacity: 0,
  ease: Elastic.easeOut,
  y: '100%'
}, 0.1);

