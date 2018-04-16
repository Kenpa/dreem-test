import _ from 'lodash';
import calcBreakpoint from './breakpoints';

/**
 * Initialize array with 'data-anim' elements
 */
const initializeElements = () => {
  const _elements = document.querySelectorAll('[data-anim]');
  let elements = [];

  _.each(_elements, (element) => {
    const eventName = element.dataset.event;
    const breakpoints = {
      breakpointIn: calcBreakpoint(element, 'in'),
      breakpointOut: calcBreakpoint(element, 'out')
    };
    elements.push({...breakpoints, node: element, eventName: eventName});
  });

  return elements;
};

export default initializeElements;
