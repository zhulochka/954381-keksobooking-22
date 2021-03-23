import {TYPES} from './temp-data.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

const MIN_PRICE_OF_TYPE = [
  10000,
  1000,
  5000,
  0,
];

const titleAdvertInput = document.querySelector('#title');
const typeSelect = document.querySelector('#type');
const priceSelect = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const address = document.querySelector('#address');
const roomNumberSelect = document.querySelector('#room_number');
const guestsNumberSelect = document.querySelector('#capacity');
const btnAdFormSubmit = document.querySelector('.ad-form__submit');




titleAdvertInput.addEventListener('input', () => {
  const valueLength = titleAdvertInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleAdvertInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleAdvertInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
  } else {
    titleAdvertInput.setCustomValidity('');
  }

  titleAdvertInput.reportValidity();
});



const createMinPriceOfTypeVocabulary = () => {
  const minPriceOfTypeObject = {};
  for (let i = 0; i <= TYPES.length - 1; i++) {
    minPriceOfTypeObject[TYPES[i]] = MIN_PRICE_OF_TYPE[i];
  }
  return minPriceOfTypeObject;
};
const minPriceOfTypeVocabulary = createMinPriceOfTypeVocabulary();



priceSelect.min = minPriceOfTypeVocabulary[typeSelect.value];


typeSelect.addEventListener('change', () => {
  priceSelect.placeholder = minPriceOfTypeVocabulary[typeSelect.value];
  priceSelect.min = minPriceOfTypeVocabulary[typeSelect.value];
  if (priceSelect.value < priceSelect.min) {
    priceSelect.setCustomValidity('Цена должна быть не меньше минимальной ' + priceSelect.min +' руб. для этого типа жилья');
  } else if (priceSelect.value > MAX_PRICE_VALUE) {
    priceSelect.setCustomValidity('Цена не должна превышать' + MAX_PRICE_VALUE + ' руб.');
  } else {
    priceSelect.setCustomValidity('');
  }
  typeSelect.reportValidity();
});


priceSelect.addEventListener('input', () => {
  const priceValue = priceSelect.value;
  if (priceValue < priceSelect.min) {
    priceSelect.setCustomValidity('Цена должна быть не меньше минимальной ' + priceSelect.min +
      ' руб. для этого типа жилья');
  } else if (priceValue > MAX_PRICE_VALUE) {
    priceSelect.setCustomValidity('Цена не должна превышать' + MAX_PRICE_VALUE + ' руб.');
  } else {
    priceSelect.setCustomValidity('');
  }
  priceSelect.reportValidity();
});



roomNumberSelect.addEventListener('change', () => {
  const guestsNumberSelectOptions = Array.from(guestsNumberSelect.querySelectorAll('option'));

  for (let i = 0; i < guestsNumberSelectOptions.length; i++) {
    guestsNumberSelectOptions[i].classList.remove('hidden');
  }

  if (Number(roomNumberSelect.value) !== 100) {
    for (let i = 0; i < guestsNumberSelectOptions.length; i++) {
      if ((Number(guestsNumberSelectOptions[i].value) > Number(roomNumberSelect.value)) ||
      (Number(guestsNumberSelectOptions[i].value) === 0)) {
        guestsNumberSelectOptions[i].classList.add('hidden');
      }
    }
  } else {
    for (let i = 0; i < guestsNumberSelectOptions.length; i++) {
      if (Number(guestsNumberSelectOptions[i].value) !== 0) {
        guestsNumberSelectOptions[i].classList.add('hidden');
      }
    }
  }
  roomNumberSelect.reportValidity();
});




timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});


btnAdFormSubmit.addEventListener('submit', (evt) => {
  if ((Number(roomNumberSelect.value) < Number(guestsNumberSelect.value)) ||
    (((Number(roomNumberSelect.value)) === 100) && (Number(guestsNumberSelect.value)) !== 0)) {


    evt.preventDefault();

    if ((Number(roomNumberSelect.value) < Number(guestsNumberSelect.value)) ||
      (((Number(roomNumberSelect.value)) === 100) && (Number(guestsNumberSelect.value)) !== 0)) {
      guestsNumberSelect.setCustomValidity('Количество гостей не должно превышать количество комнат');
    } else {
      guestsNumberSelect.setCustomValidity('100 комнат - не для гостей');
    }
    
  }  else {
    guestsNumberSelect.setCustomValidity('');
  }
  priceSelect.reportValidity();
});





export {address};
