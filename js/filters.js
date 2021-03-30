
import {mapFiltersForm, mapFeatures, mapFilterFieldsets} from './status-main-page.js';
import {renderAdverts, removeAdverts} from './map.js';
import {NUMBER_ADVERTS_FOR_MAP} from './get-adverts.js';



const filtersForm = document.querySelector('.map__filters');
const housingTypeFilter = document.querySelector('#housing-type');
const housingPriceFilter = document.querySelector('#housing-price');
const housingRoomsFilter = document.querySelector('#housing-rooms');
const housingGuestsFilter = document.querySelector('#housing-guests');
const wifiFilter = document.querySelector('#filter-wifi');
const dishwasherFilter = document.querySelector('#filter-dishwasher');
const parkingFilter = document.querySelector('#filter-parking');
const washerFilter = document.querySelector('#filter-washer');
const elevatorFilter = document.querySelector('#filter-elevator');
const conditionerFilter = document.querySelector('#filter-conditioner');



let arrayForFilters = [];


const activateMapFilters = (loadedAdverts) => {
  mapFiltersForm.classList.remove('ad-form--disabled');
  mapFeatures.removeAttribute('disabled');
  for (const mapFilterFieldset of mapFilterFieldsets) {
    mapFilterFieldset.removeAttribute('disabled');
  }

  arrayForFilters = getAdvertsArrayForFilters(loadedAdverts);

  filtersForm.addEventListener('change', () => {
    onFiltersFormSelectFilterClick(arrayForFilters);
  });

};

const getAdvertsArrayForFilters = (loadedAdverts) => {
  const advertsArrayForFilters = loadedAdverts.slice();

  return advertsArrayForFilters;
};

const onFiltersFormSelectFilterClick = (arrayForFilters) => {



  const currentOptionValues = {};
  currentOptionValues['type'] = housingTypeFilter.value;
  currentOptionValues['price'] = housingPriceFilter.value;
  currentOptionValues['rooms'] = housingRoomsFilter.value;
  currentOptionValues['guests'] = housingGuestsFilter.value;
  currentOptionValues['wifi'] = wifiFilter.value;
  currentOptionValues['dishwasher'] = dishwasherFilter.value;
  currentOptionValues['parking'] = parkingFilter.value;
  currentOptionValues['washer'] = washerFilter.value;
  currentOptionValues['elevator'] = elevatorFilter.value;
  currentOptionValues['conditioner'] = conditionerFilter.value;




  putFilter(arrayForFilters, currentOptionValues);
};



const putFilter = (arrayForFilters, currentOptionValues) => {

  const checkType = (element) => (element.offer.type === currentOptionValues['type']);



  let newSimilarAdverts = arrayForFilters;

  if (currentOptionValues['type'] !== 'any') {
    newSimilarAdverts = arrayForFilters.filter(checkType);
  }

  removeAdverts();
  renderAdverts(newSimilarAdverts.slice(0, NUMBER_ADVERTS_FOR_MAP));
};





export {activateMapFilters};
