import {address, advertForm} from './form.js';
import {mainPinMarker, START_MARKER_COORDINATE_LAT, START_MARKER_COORDINATE_LNG} from './map.js';
import {mapFiltersForm} from './filters.js';

const mapFilters = document.querySelector('.map__filters');
const mapFeatures = document.querySelector('.map__features');
const mapFilterFieldsets = document.querySelectorAll('.map__filter');

const adForm = document.querySelector('.ad-form');
const adFormHeaderFieldset = document.querySelector('.ad-form-header');
const adFormElementFieldsets = document.querySelectorAll('.ad-form__element');

mapFilters.classList.add('ad-form--disabled');
mapFeatures.setAttribute('disabled', 'disabled');
for (const mapFilterFieldset of mapFilterFieldsets) {
  mapFilterFieldset.setAttribute('disabled', 'disabled');
}


adForm.classList.add('ad-form--disabled');
adFormHeaderFieldset.setAttribute('disabled', 'disabled');
for (const adFormElementFieldset of adFormElementFieldsets) {
  adFormElementFieldset.setAttribute('disabled', 'disabled');
}

const activateMainPage = () => {
  mapFilters.classList.remove('ad-form--disabled');
  mapFeatures.removeAttribute('disabled');
  for (const mapFilterFieldset of mapFilterFieldsets) {
    mapFilterFieldset.removeAttribute('disabled');
  }

  adForm.classList.remove('ad-form--disabled');
  adFormHeaderFieldset.removeAttribute('disabled');
  for (const adFormElementFieldset of adFormElementFieldsets) {
    adFormElementFieldset.removeAttribute('disabled');
  }
  address.value = START_MARKER_COORDINATE_LAT.toFixed(5) + ', ' + START_MARKER_COORDINATE_LNG.toFixed(5);

};



const getDefaultMainPage = () => {
  advertForm.reset();
  address.value = START_MARKER_COORDINATE_LAT.toFixed(5) + ', ' + START_MARKER_COORDINATE_LNG.toFixed(5);
  mapFiltersForm.reset();
  mainPinMarker.setLatLng({
    lat: START_MARKER_COORDINATE_LAT,
    lng: START_MARKER_COORDINATE_LNG,
  })
};


export {activateMainPage, getDefaultMainPage};
