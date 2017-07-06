import { ensureUnique, generateColor } from './utils';

export default function changeBackground () {
  const AMOUNT_OF_SECONDS = 10,
        backgroundColors  = [];

  // create color array
  for (let i = 0; i < AMOUNT_OF_SECONDS; i++) {
    const newColor = ensureUnique(generateColor, backgroundColors);
    backgroundColors.push(newColor);
  }

  // set up color changes
  backgroundColors.forEach((color, index) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
    }, (index + 1) * 1000);
  });
}
