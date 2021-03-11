import {getRandomIntInclusive} from './util.js';
import {getRandomFloatInclusive} from './util.js';
import  {MIN_NUMBER_AVATAR_IMG, MAX_NUMBER_AVATAR_IMG, X_MIN, X_MAX, Y_MIN, Y_MAX, MIN_PRICE, MAX_PRICE, MIN_ROOMS,
  MAX_ROOMS, MIN_GUESTS, TITLES, TYPES, CHECKINS, CHECKOUTS, FEATURES, DESCRIPTIONS, PHOTOS} from  './temp-data.js'

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
  const offer = {
    title: getRandomArrayElement(TITLES),
    address: (resultCreateLocation.x + ', ' + resultCreateLocation.y).toString(),
    price: getRandomIntInclusive(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(TYPES),
    rooms: randomNumberRooms,
    guests: getRandomIntInclusive(MIN_GUESTS, getRandomIntInclusive (MIN_GUESTS, randomNumberRooms)),
    checkin: getRandomArrayElement(CHECKINS),
    checkout: getRandomArrayElement(CHECKOUTS),
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


const createSimilarAdverts = (similarAdvertCount) => {
  return new Array(similarAdvertCount).fill(null).map(() => createAdvert());
};
createSimilarAdverts(10);
