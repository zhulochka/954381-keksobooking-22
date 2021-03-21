import {createSimilarAdverts, TYPES, TRANSLATION_TYPES, FEATURES} from './temp-data.js';




const createTypesObjectVocabulary = () => {
  const typesObject = {};
  for (let i = 0; i <= TYPES.length - 1; i++) {
    typesObject[TYPES[i]] = TRANSLATION_TYPES[i];
  }
  return typesObject;
};
const typesObjectVocabulary = createTypesObjectVocabulary();

const similarListElement = document.querySelector('#map-canvas');
const similarAdvertTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
/*
const similarAdverts = createSimilarAdverts(1);


similarAdverts.forEach((advert) => {
  const advertElement = similarAdvertTemplate.cloneNode(true);
  advertElement.querySelector('.popup__title').textContent = advert.offer.title;
  advertElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  advertElement.querySelector('.popup__text--price').textContent = advert.offer.price + ' ₽/ночь';
  advertElement.querySelector('.popup__type').textContent = typesObjectVocabulary[advert.offer.type];
  advertElement.querySelector('.popup__text--capacity').textContent = (advert.offer.rooms !== 100 ? (advert.offer.rooms
    + ' комнаты для ' + advert.offer.guests + ' гостей') : (advert.offer.rooms + ' комнат не для гостей'));
  advertElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advert.offer.checkin
    + ', выезд до ' + advert.offer.checkout;

  const featuresListElement = advertElement.querySelector('.popup__features');
  const fillFeatures = (advertOfferFeatures) => {
    for (let i = 0; i <= FEATURES.length - 1; i++) {
      const  isElementOne = (element) => element === FEATURES[i];
      if (advertOfferFeatures.some(isElementOne) === false) {
        featuresListElement.removeChild(advertElement.querySelector(`.popup__feature--${FEATURES[i]}`));
      }
    }
  };
  fillFeatures(advert.offer.features);

  const photosListElement = advertElement.querySelector('.popup__photos');
  const photoElement = advertElement.querySelector('.popup__photo');
  const photosElements = photosListElement.children;
  const fillPhotos = (advertOfferPhotos) => {
    for (let i = 0; i <= advertOfferPhotos.length - 2; i++) {
      photosListElement.appendChild(photoElement.cloneNode(true));
    }
    if (advertOfferPhotos.length === 0) {
      photosListElement.removeChild(advertElement.querySelector('.popup__photo'));
    }
    for (let j = 0; j <= advertOfferPhotos.length - 1; j++) {
      photosElements[j].src = advertOfferPhotos[j];
    }
  };
  fillPhotos(advert.offer.photos);

  advertElement.querySelector('.popup__description').textContent = advert.offer.description;
  advertElement.querySelector('.popup__avatar').src = advert.author.avatar;

  similarListElement.appendChild(advertElement);

  const advertElementItems = advertElement.children;

  for (const advertElementItem of advertElementItems) {
    if (advertElementItem.innerText === '' && advertElementItem.childElementCount === 0 && (advertElementItem.src === '' || advertElementItem.src === undefined)) {

      advertElementItem.classList.add('hidden');

    }
  }
});

*/





