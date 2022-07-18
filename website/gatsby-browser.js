// Make scroll behavior of internal links smooth
exports.onClientEntry = () => {
  const SmoothScroll = require('smooth-scroll');
  new SmoothScroll('a[href*="#"]', {
    offset() {
      return document.querySelector('#header').offsetHeight;
    },
    durationMax: 300, // 300 milliseconds is default speed to scroll 1000px. Use 300 as ceiling, don't set floor
  });
};
