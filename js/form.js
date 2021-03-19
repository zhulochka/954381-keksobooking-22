import {TYPES} from './temp-data.js';

const MIN_PRICE_OF_TYPE = [
  10000,
  1000,
  5000,
  0,
];

const typeSelect = document.querySelector('#type');
const priceSelect = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


const createMinPriceOfTypeVocabulary = () => {
  const minPriceOfTypeObject = {};
  for (let i = 0; i <= TYPES.length - 1; i++) {
    minPriceOfTypeObject[TYPES[i]] = MIN_PRICE_OF_TYPE[i];
  }
  return minPriceOfTypeObject;
};
const minPriceOfTypeVocabulary = createMinPriceOfTypeVocabulary();

priceSelect.placeholder = minPriceOfTypeVocabulary[typeSelect.value];
priceSelect.min = minPriceOfTypeVocabulary[typeSelect.value];

typeSelect.onchange = function () {
  priceSelect.placeholder = minPriceOfTypeVocabulary[typeSelect.value];
  priceSelect.min = minPriceOfTypeVocabulary[typeSelect.value];
};

timeIn.onchange = function () {
  timeOut.value = timeIn.value;
};

timeOut.onchange = function () {
  timeIn.value = timeOut.value;
};
