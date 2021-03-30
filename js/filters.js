import {mapFiltersForm, mapFeatures, mapFilterFieldsets} from './status-main-page.js';
import {renderAdverts, removeAdverts} from  './map.js';



const housingTypeFilter = document.querySelector('#housing-type');



let arrayForFilters = [];

const activateMapFilters = (loadedAdverts) => {
  mapFiltersForm.classList.remove('ad-form--disabled');
  mapFeatures.removeAttribute('disabled');
  for (const mapFilterFieldset of mapFilterFieldsets) {
    mapFilterFieldset.removeAttribute('disabled');
  }

  arrayForFilters = getAdvertsArrayForFilters(loadedAdverts);
  housingTypeFilter.addEventListener('change', () => {

    onHousingTypeFilterClick(arrayForFilters);
  });

};

const getAdvertsArrayForFilters = (loadedAdverts) => {
  const advertsArrayForFilters = loadedAdverts.slice(0, 10);

  return advertsArrayForFilters;
};

const onHousingTypeFilterClick = (arrayForFilters) => {
  const currentOption = housingTypeFilter.value;

  putFilter(arrayForFilters, currentOption);
};

const putFilter = (arrayForFilters, currentOption) => {
  const newSimilarAdverts =
    arrayForFilters.filter((element) => element.offer.type === currentOption);

  removeAdverts();
  renderAdverts(newSimilarAdverts);

};





export {activateMapFilters};
