/**
 * Animate words behind the picture
 */
let intervalID = null;

const picturesWrapper = document.querySelector('.picturesWrapper');
const list = [
  'dune', 'soleil', 'chaleur', 'eau',
  'ciel', 'thin', 'romarin', 'criquet',
  'sauterelle', 'cocotier', 'palmier',
  'pêche', 'barbecue', 'rosé', 'mirtille'];
const fontSizes = ['0.8em', '1em', '1.2em', '1.4em'];

const animateWords = (state) => {
  if (!state) {
    clearInterval(intervalID);
  } else {
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
  const text = list[getRandomInt(0, list.length)];
  const textNode = document.createTextNode(list[getRandomInt(0, list.length)]);
  const randomPositionY = getRandomInt(0, picturesWrapper.offsetHeight);
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

const getRandomInt = function(min, max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default animateWords;
