import _ from 'lodash';
import handleScroll from './helpers/scroll';
import initElements from './helpers/initElements';
import initBlocksHeight from './helpers/initBlocksHeight';
import animateWords from './helpers/animateWords';

import '../sass/main.scss'; // for webpack compilation

let elements = [];

const init = () => {
  window.addEventListener('DOMContentLoaded', refresh);
  window.addEventListener('resize', _.debounce(refresh, 100, true));
  window.addEventListener('scroll', _.throttle(() => {
    handleScroll(elements);
  }, 100));

  // Listen to block2 pictures animation events
  window.addEventListener('animating-pictures', () => {
    animateWords(true);
  });
  window.addEventListener('not-animating-pictures', () => {
    animateWords(false);
  });
};

const refresh = () => {
  initBlocksHeight();
  elements = initElements();
  handleScroll(elements);
}

init();
