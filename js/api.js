import {showAlert} from './util.js';

const URL = 'https://22.javascript.pages.academy/keksobooking/data';

const loadSimilarAdverts = async () => {
  let response;
  try {
    response = await fetch(URL);
  } catch (error) {
    showAlert('Не удалось загрузить объявления');
    //console.log(error);
    return [];
  }
  const similarAdverts = await response.json();
  return similarAdverts;
};



export {loadSimilarAdverts};



