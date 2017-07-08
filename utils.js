export function ensureUnique (valueGenerator = () => {}, previousValues = []) {
  const newValue = valueGenerator();

  if (previousValues.includes(newValue)) {
    ensureUnique(valueGenerator, previousValues);
  } else {
    return newValue;
  }
}

export function generateColor () {
  const r = randomRGBValue(),
        g = randomRGBValue(),
        b = randomRGBValue();

  return `rgb(${ r }, ${ g }, ${ b })`;
}

function randomRGBValue () {
  return randomNumber({ max : 255 })
}

function randomNumber ({ min = 0, max = 10 } = {}) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
