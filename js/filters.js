const mapFilters = document.querySelector('.map__filters');
const mapFeatures = document.querySelector('.map__features');
const mapFilterFieldsets = document.querySelectorAll('.map__filter');

mapFilters.classList.add('ad-form--disabled');
mapFeatures.setAttribute('disabled', 'disabled');
for (let mapFilterFieldset of mapFilterFieldsets) {
  mapFilterFieldset.setAttribute('disabled', 'disabled');
}
