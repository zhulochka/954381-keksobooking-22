import {getRandomIntInclusive, getRandomFloatInclusive} from './util.js';

const MIN_NUMBER_AVATAR_IMG = 1;
const MAX_NUMBER_AVATAR_IMG = 8;

const X_MIN = 35.65000;
const X_MAX = 35.70000;
const Y_MIN = 139.70000;
const Y_MAX = 139.80000;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 100;
const MIN_GUESTS = 1;
const NUMBER_MARKERS = 10;

const TITLES = [
  'Солнечное место',
  'В самом сердце города',
  'Уютное местечко',
  'У театра',
  'Комфорт класс',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'any',
];
const TRANSLATION_TYPES = [
  'Дворец',
  'Квартира',
  'Дом',
  'Бунгало',
  'Любой тип жилья',
];
const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'Незабываемый отдых',
  'Свежий ремонт, без окон, в центре города',
  'С отличным ремонтом',
  'Рядом расположены большой торговый центр, кинотеатры, аквапарк',
  'Мы сделали все, чтобы наши гости чувствовали уют и комфорт ',
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const createTypesObjectVocabulary = () => {
  const typesObject = {};
  for (let i = 0; i <= TYPES.length - 1; i++) {
    typesObject[TYPES[i]] = TRANSLATION_TYPES[i];
  }
  return typesObject;
};
const typesObjectVocabulary = createTypesObjectVocabulary();


const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

const getArrayRandomLength = (list) => {
  const arrayLength = getRandomIntInclusive(0, list.length);
  const arrayRandomLength = [];

  while  (arrayRandomLength.length < arrayLength) {
    const arrayRandomLengthIndex = getRandomIntInclusive (0, arrayLength - 1);
    const arrayRandomLengthElement = list[arrayRandomLengthIndex];
    const  isElementOne = (element) => element === arrayRandomLengthElement;
    if ((arrayRandomLength.some(isElementOne) === false) || (arrayRandomLength.length === 0)) {
      arrayRandomLength.push(arrayRandomLengthElement);
    }
  }
  return arrayRandomLength;
};


const createAuthor = () => {
  const randomNumberAvatarImg = '0' + getRandomIntInclusive(MIN_NUMBER_AVATAR_IMG, MAX_NUMBER_AVATAR_IMG).toString();
  const avatarValue = 'img/avatars/user' +randomNumberAvatarImg + '.png';
  const author = {
    avatar: avatarValue,
  };
  return author;

};


const createOffer = (resultCreateLocation) => {

  const randomNumberRooms = getRandomIntInclusive(MIN_ROOMS, MAX_ROOMS);
  const timeCheckinCheckout = getRandomArrayElement(TIME);
  const offer = {
    title: getRandomArrayElement(TITLES),
    address: (resultCreateLocation.x + ', ' + resultCreateLocation.y).toString(),
    price: getRandomIntInclusive(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(TYPES),
    rooms: randomNumberRooms,
    guests: getRandomIntInclusive(MIN_GUESTS, getRandomIntInclusive (MIN_GUESTS, randomNumberRooms)),
    checkin: timeCheckinCheckout,
    checkout: timeCheckinCheckout,
    features: getArrayRandomLength(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getArrayRandomLength(PHOTOS),
  };
  return offer;
};


const createLocation = () => {
  const coordinateDigits = 5;
  const randomX = getRandomFloatInclusive(X_MIN, X_MAX, coordinateDigits);
  const randomY = getRandomFloatInclusive(Y_MIN, Y_MAX, coordinateDigits);
  const location = {
    x: randomX,
    y: randomY,
  };
  return location;
};


const createAdvert = () => {
  const resultCreateLocation = createLocation();

  const advert = {
    author: createAuthor(),
    offer: createOffer(resultCreateLocation),
    location: resultCreateLocation,

  };
  return advert;
};


const createRandomSimilarAdverts = (similarAdvertCount) => {
  return new Array(similarAdvertCount).fill(null).map(() => createAdvert());
};

//console.log(createRandomSimilarAdverts(NUMBER_MARKERS));

export {TYPES, TRANSLATION_TYPES, FEATURES, typesObjectVocabulary, createRandomSimilarAdverts, NUMBER_MARKERS};
