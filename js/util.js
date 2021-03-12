const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && min <= max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const getRandomFloatInclusive = (min, max, digits) => {
  if (min >= 0 && min <= max && digits >= 0) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(digits));
  }
}

export {getRandomIntInclusive, getRandomFloatInclusive};

