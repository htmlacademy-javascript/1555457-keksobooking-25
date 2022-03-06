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

  return Math.round(Math.random() * (max - min)) + min;
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
export {getRandomNumber, getRandomFloat};
