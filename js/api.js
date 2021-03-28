import {showErrorMessage, showSuccessMessage} from './information-messages.js';
import {advertForm} from './form.js';
import {showAlert} from './information-messages.js';
import {getDefaultMainPage} from './status-main-page.js';

const DATA_URL = 'https://22.javascript.pages.academy/keksobooking/data';
const SERVER_URL = 'https://22.javascript.pages.academy/keksobooking';



const loadSimilarAdverts = async () => {
  let response;
  try {
    response = await fetch(DATA_URL);
  } catch (error) {
    showAlert();
    return [];
  }
  const similarAdverts = await response.json();
  return similarAdverts;
};




const setAdvertFormSubmit = () => {
  advertForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      SERVER_URL,
      {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(`${response.status} ${response.statusText}`);
      })
      .then(() => {
        getDefaultMainPage();
        showSuccessMessage();
      })
      .catch(() => {
        showErrorMessage();
      })
  });
};


export {loadSimilarAdverts, setAdvertFormSubmit};



