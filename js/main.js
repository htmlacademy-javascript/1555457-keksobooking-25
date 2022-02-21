function getRandomNumber (min, max) {
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  if (min < 0 || max < 0) {
    return null;
  }
  min = Math.floor(min);
  max = Math.ceil(max);

  return Math.floor(Math.random() * (max - min)) + min;
  //source: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
function getRandomFloat (min, max, digits) {
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  if (min < 0 || max < 0) {
    return null;
  }

  return (Math.random() * (max - min) + min).toFixed(digits);
}
getRandomFloat();
getRandomNumber();
