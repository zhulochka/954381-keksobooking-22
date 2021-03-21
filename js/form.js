import {TYPES} from './temp-data.js';

const MIN_PRICE_OF_TYPE = [
  10000,
  1000,
  5000,
  0,
];

const adForm = document.querySelector('.ad-form');
const adFormHeaderFieldset = document.querySelector('.ad-form-header');
const adFormElementFieldsets = document.querySelectorAll('.ad-form__element');

const typeSelect = document.querySelector('#type');
const priceSelect = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


adForm.classList.add('ad-form--disabled');
adFormHeaderFieldset.setAttribute('disabled', 'disabled');
for (let adFormElementFieldset of adFormElementFieldsets) {
  adFormElementFieldset.setAttribute('disabled', 'disabled');
}


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

typeSelect.addEventListener('change', () => {
  priceSelect.placeholder = minPriceOfTypeVocabulary[typeSelect.value];
  priceSelect.min = minPriceOfTypeVocabulary[typeSelect.value];
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});
