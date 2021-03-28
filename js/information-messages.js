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



const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const successMessage = successTemplate.cloneNode(true);
  main.appendChild(successMessage);
  successMessage.addEventListener('click', () => {
    onDocumentClick(successMessage, removeSuccessMessage);
  });
  document.addEventListener('keydown', (evt) => {
    onSuccessMessageEscKeydown(evt,successMessage);
  });
};

const removeSuccessMessage = (message) => {
  message.remove();
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
};

const onDocumentClick = (message, removeInformationMessage) => {
  removeInformationMessage(message);
};

const onSuccessMessageEscKeydown = (evt, message) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeSuccessMessage(message);
  }
};

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const errorMessage = errorTemplate.cloneNode(true);
  main.appendChild(errorMessage);
  errorMessage.addEventListener('click', () => {
    onDocumentClick(errorMessage, removeErrorMessage);
  });
  document.addEventListener('keydown', (evt) => {
    onErrorMessageEscKeydown(evt,errorMessage);
  });
  const buttonErrorMessage = errorMessage.querySelector('.error__button');
  buttonErrorMessage.addEventListener('click', () => {
    onButtonErrorMessageClick(errorMessage);
  });
};

const removeErrorMessage = (message) => {
  message.remove();
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
};

const onErrorMessageEscKeydown = (evt, message) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeErrorMessage(message);
  }
};

const onButtonErrorMessageClick = (message) => {
  message.remove();
};




export {showAlert, showSuccessMessage, showErrorMessage};
