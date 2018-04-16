import _ from 'lodash';
/**
 * Called when scrolling
 */
const handleScroll = (elements) => {
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;

  _.each(elements, (el, i) => {
    setAnimationState(el, windowHeight + scrollTop);
  });
};

/**
 * Add/Remove .animate on elements
 */
const setAnimationState = (element, top) => {
  if (top > element.breakpointIn && element.breakpointOut > top) element.node.classList.add('animate');
  else element.node.classList.remove('animate');
};

export default handleScroll;
