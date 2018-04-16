import _ from 'lodash';
import handleScroll from './helpers/scroll';
import initElements from './helpers/initElements';
import initBlocksHeight from './helpers/initBlocksHeight';

import '../sass/main.scss'; // for webpack compilation

let elements = [];

const init = () => {
  window.addEventListener('DOMContentLoaded', refresh);
  window.addEventListener('resize', _.debounce(refresh, 100, true));
  window.addEventListener('scroll', _.throttle(() => {
    handleScroll(elements);
  }, 100));
};

const refresh = () => {
  initBlocksHeight();
  elements = initElements();
  handleScroll(elements);
}

init();
