import {showErrorMessage, showSuccessMessage} from './information-messages.js';
import {advertForm} from './form.js';
import {showAlert} from './information-messages.js';
import {getDefaultMainPage} from './status-main-page.js';
import {activateMapFilters} from './filters.js';


const DATA_URL = 'https://22.javascript.pages.academy/keksobooking/data';
const SERVER_URL = 'https://22.javascript.pages.academy/keksobooking';



const getAdverts = async () => {
  let response;
  try {
    response = await fetch(DATA_URL);

  } catch (error) {

    showAlert();
    return [];
  }
  const similarAdverts = await response.json();
  activateMapFilters(similarAdverts);
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


export {getAdverts, setAdvertFormSubmit};



