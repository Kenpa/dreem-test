import _ from 'lodash';

let intervalID = null;
let picturesWrapper = null;
let imgHeight = null;

/**
 * Bounds of words vertical position
 */
const topHeadLimitInPicture = 0.8;
const bottomHeadLimitInPicture = 0.3;

const list = [
  'dune', 'soleil', 'chaleur', 'eau',
  'ciel', 'thin', 'romarin', 'criquet',
  'sauterelle', 'cocotier', 'palmier',
  'pêche', 'barbecue', 'rosé', 'mirtille'];
const fontSizes = ['0.8em', '1em', '1.2em', '1.4em'];

/**
 * Animate words behind the picture
 */
const animateWords = (state) => {
  if (!state) {
    clearInterval(intervalID);
  } else {
    picturesWrapper = document.querySelector('.picturesWrapper');
    imgHeight = document.querySelector('.greyPicture').offsetHeight;
    intervalID = setInterval(() => {
      const node = initializeWord();
      setTimeout(() => {
        node.style.transform = 'translateX(-' + picturesWrapper.offsetWidth + 'px)';
      }, 100);
    }, 2000);
  }
};

const initializeWord = () => {
  const node = document.createElement('SPAN');
  const text = _.startCase(_.toLower(list[getRandomInt(0, list.length)]));
  const textNode = document.createTextNode(text);
  const randomPositionY = getRandomInt(imgHeight * bottomHeadLimitInPicture, imgHeight * topHeadLimitInPicture);
  const randomFontSize = fontSizes[getRandomInt(0, fontSizes.length)];

  node.appendChild(textNode);
  node.classList.add('floatingWord', 'animate');
  node.setAttribute('data-anim', 'floating');
  node.style.fontSize = randomFontSize;
  node.style.bottom = randomPositionY + 'px';

  picturesWrapper.appendChild(node);

  setTimeout(() => {
    node.remove();
  }, 10000);

  return node;
}

const getRandomInt = (min, max) => {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default animateWords;
