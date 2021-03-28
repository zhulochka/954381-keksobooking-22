import {isEscEvent} from './util.js';



const ALERT_SHOW_TIME = 5000;



const showAlert = () => {
  const alertTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const alertMessage = alertTemplate.cloneNode(true);
  main.appendChild(alertMessage);
  const alertText = alertMessage.querySelector('.success__message');
  alertText.textContent = 'Ошибка загрузки объявлений';

  setTimeout(() => {
    alertMessage.remove();
  }, ALERT_SHOW_TIME);
};



const main = document.querySelector('main');


let successMessage;

const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  successMessage = successTemplate.cloneNode(true);
  main.appendChild(successMessage);
  successMessage.addEventListener('click', () => {
    onSuccessMessageClick(removeSuccessMessage);
  });
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
};

const removeSuccessMessage = () => {
  successMessage.remove();
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);

};

const onSuccessMessageClick = () => {
  removeSuccessMessage();
};

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeSuccessMessage();
  }
};


let errorMessage;

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  errorMessage = errorTemplate.cloneNode(true);
  main.appendChild(errorMessage);
  errorMessage.addEventListener('click', () => {
    onErrorMessageClick(errorMessage, removeErrorMessage);
  });
  document.addEventListener('keydown', onErrorMessageEscKeydown);
  const buttonErrorMessage = errorMessage.querySelector('.error__button');
  buttonErrorMessage.addEventListener('click', () => {
    onButtonErrorMessageClick();
  });
};

const removeErrorMessage = () => {
  errorMessage.remove();
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
};

const onErrorMessageClick = () => {
  removeErrorMessage();
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeErrorMessage();
  }
};

const onButtonErrorMessageClick = () => {
  errorMessage.remove();
};




export {showAlert, showSuccessMessage, showErrorMessage};
