import { ensureUnique, generateColor } from './utils';

export default class ColorChanger {
  constructor () {
    this.AMOUNT_OF_SECONDS = 10;
    this.backgroundColors  = [];

    this.changeBackground(1);
  }

  changeBackground (i) {
    setTimeout(() => {
      const color = ensureUnique(generateColor, this.backgroundColors);
      this.backgroundColors.push(color);
      document.body.style.backgroundColor = color;

      if (i < this.AMOUNT_OF_SECONDS) {
        this.changeBackground(i + 1);
      }
    }, 1000);
  }
}
