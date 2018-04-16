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
 * Add/Remove .animate on elements & trigger animation events
 */
const setAnimationState = (element, top) => {
  let eventAnimating = null;
  let eventNotAnimating = null;

  if (element.eventName) {
    eventAnimating = new Event(element.eventName);
    eventNotAnimating = new Event('not-' + element.eventName);
  }

  if (top > element.breakpointIn && element.breakpointOut > top) {
    if (eventAnimating && !element.node.classList.contains('animate')) {
      window.dispatchEvent(eventAnimating);
    }
    element.node.classList.add('animate');
  } else {
    if (eventNotAnimating && element.node.classList.contains('animate')) {
      window.dispatchEvent(eventNotAnimating);
    }
    element.node.classList.remove('animate');
  }
};

export default handleScroll;
