function getRandomNumber (min, max) {
  if (min > max) {
    const SWAP = min;
    min = max;
    max = SWAP;
  }
  if (min < 0 || max < 0) {
    return null;
  }
  min = Math.floor(min);
  max = Math.ceil(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
  //source: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
function getRandomFloat (min, max, digits) {
  if (min > max) {
    const SWAP = min;
    min = max;
    max = SWAP;
  }
  if (min < 0 || max < 0) {
    return null;
  }

  return (Math.random() * (max - min + 1) + min).toFixed(digits);
}
getRandomFloat();
getRandomNumber();
