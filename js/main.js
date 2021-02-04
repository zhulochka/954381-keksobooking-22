// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && min <= max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
getRandomIntInclusive(1, 15);

const getRandomFloatInclusive = (min, max, digits) => {
  if (min >= 0 && min <= max && digits >= 0) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(digits));
  }
}
getRandomFloatInclusive(2.15, 27.445, 5);
