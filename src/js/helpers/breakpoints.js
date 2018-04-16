/**
 * Calculate element breakpoints to start/end the animation
 */
const calcBreakpoint = (element, state) => {
  const customOffset = element.getAttribute('data-offset-value-' + state) ? element.getAttribute('data-offset-value-' + state) : 0;
  const customAnchorOffset = element.getAttribute('data-offset-anchor-' + state);

  element = customAnchorOffset ? document.querySelector(customAnchorOffset) : element;

  const topOffset = calcTopOffset(element);
  const elHeight = element.offsetHeight;

  if (state == 'in') return topOffset + customOffset * elHeight;
  else return window.innerHeight + topOffset + customOffset * elHeight;
};

/**
 * Calculate distance between top of element and top of 'BODY'
 */
const calcTopOffset = (element) => {
  let top = 0;

  while (element) {
    top += element.offsetTop;
    element = element.offsetParent;
  }
  return top;
};

export default calcBreakpoint;
