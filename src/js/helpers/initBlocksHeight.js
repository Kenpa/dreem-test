/**
 * Calc the minHeight for each block
 */
const initializeBlocksHeight = () => {
  const block1 = document.querySelector('.block1');
  const block2 = document.querySelector('.block2');
  const block3 = document.querySelector('.block3');

  // Fix to window minHeight to allow space for scrolling
  block1.style.minHeight = window.innerHeight + 'px';
  block3.style.minHeight = window.innerHeight + 'px';

  // Calc block2 height to contain the picture after the zoomIn
  const img = document.querySelector('.colorPicture');
  const imgRealHeight = img.naturalHeight;
  const imgRealWidth = img.naturalWidth;

  const picturesWrapperHeight = window.innerWidth * 0.5 * imgRealHeight / imgRealWidth;

  // ZoomIn scale : 1.5
  block2.style.minHeight = picturesWrapperHeight * 1.25 + 'px';
};

export default initializeBlocksHeight;
