/* global L:readonly */

import {activateMainPage} from './status-main-page.js';
import {address} from './form.js';
import {FEATURES, createSimilarAdverts, typesObjectVocabulary} from './temp-data.js';

const START_MARKER_COORDINATE_LAT = 35.68950;
const START_MARKER_COORDINATE_LNG = 139.69171;
const NUMBER_MARKERS = 10;
const MAP_SCALE = 12;
const ICON_PIN_SIZE = [
  25,
  41,
];


const map = L.map('map-canvas')
  .on('load', () => {
    activateMainPage();
  })

  .setView({
    lat: START_MARKER_COORDINATE_LAT,
    lng: START_MARKER_COORDINATE_LNG,
  }, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [ICON_PIN_SIZE[0] * 2, ICON_PIN_SIZE[1] * 2],
  iconAnchor: [ICON_PIN_SIZE[0], ICON_PIN_SIZE[1] * 2],
});

const mainPinMarker = L.marker(
  {
    lat: START_MARKER_COORDINATE_LAT,
    lng: START_MARKER_COORDINATE_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },

);
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const currentMarkerCoordinates = evt.target.getLatLng().lat.toFixed(5) + ', '
  + evt.target.getLatLng().lng.toFixed(5);
  address.value = currentMarkerCoordinates;
});



const similarAdverts = createSimilarAdverts(NUMBER_MARKERS);



const createCustomPopup = (advert) => {
  const balloonTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = advert.offer.title;
  if (advert.offer.title === '') {
    popupElement.querySelector('.popup__title').classList.add('hidden');
  }

  popupElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  if (advert.offer.address === '') {
    popupElement.querySelector('.popup__text--address').classList.add('hidden');
  }

  popupElement.querySelector('.popup__text--price').textContent = advert.offer.price + ' ₽/ночь';
  if (advert.offer.price === '') {
    popupElement.querySelector('.popup__text--price').classList.add('hidden');
  }

  popupElement.querySelector('.popup__type').textContent = typesObjectVocabulary[advert.offer.type];
  if (advert.offer.type === '') {
    popupElement.querySelector('.popup__type').classList.add('hidden');
  }

  popupElement.querySelector('.popup__text--capacity').textContent = (advert.offer.rooms !== 100 ? (advert.offer.rooms
    + ' комнаты для ' + advert.offer.guests + ' гостей') : (advert.offer.rooms + ' комнат не для гостей'));
  if (advert.offer.rooms === '') {
    popupElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advert.offer.checkin
    + ', выезд до ' + advert.offer.checkout;
  if (advert.offer.checkin === '') {
    popupElement.querySelector('.popup__text--time').classList.add('hidden');
  }

  const featuresListElement = popupElement.querySelector('.popup__features');
  const fillFeatures = (advertOfferFeatures) => {
    for (let i = 0; i <= FEATURES.length - 1; i++) {
      const  isElementOne = (element) => element === FEATURES[i];
      if (advertOfferFeatures.some(isElementOne) === false) {
        featuresListElement.removeChild(popupElement.querySelector(`.popup__feature--${FEATURES[i]}`));
      }
    }
    if (advertOfferFeatures.length === 0) {
      featuresListElement.classList.add('hidden');
    }
  };
  fillFeatures(advert.offer.features);

  const photosListElement = popupElement.querySelector('.popup__photos');
  const photoElement = popupElement.querySelector('.popup__photo');
  const photosElements = photosListElement.children;
  const fillPhotos = (advertOfferPhotos) => {
    for (let i = 0; i <= advertOfferPhotos.length - 2; i++) {
      photosListElement.appendChild(photoElement.cloneNode(true));
    }
    if (advertOfferPhotos.length === 0) {
      photosListElement.removeChild(popupElement.querySelector('.popup__photo'));
      photosListElement.classList.add('hidden');
    }
    for (let j = 0; j <= advertOfferPhotos.length - 1; j++) {
      photosElements[j].src = advertOfferPhotos[j];
    }
  };
  fillPhotos(advert.offer.photos);

  popupElement.querySelector('.popup__description').textContent = advert.offer.description;
  if (advert.offer.description === '') {
    popupElement.querySelector('.popup__description').classList.add('hidden');
  }

  popupElement.querySelector('.popup__avatar').src = advert.author.avatar;
  if (advert.author.avatar === '') {
    popupElement.querySelector('.popup__avatar').classList.add('hidden');
  }

  return popupElement;
};



similarAdverts.forEach((advert) => {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [ICON_PIN_SIZE[0], ICON_PIN_SIZE[1]],
    iconAnchor: [(ICON_PIN_SIZE[0] / 2).toFixed(0), ICON_PIN_SIZE[1]],
  });

  const marker = L.marker(
    {
      lat: advert.location.x,
      lng: advert.location.y,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(createCustomPopup(advert),
      {
        keepInView: true,
      },
    );
});



export {START_MARKER_COORDINATE_LAT, START_MARKER_COORDINATE_LNG};


