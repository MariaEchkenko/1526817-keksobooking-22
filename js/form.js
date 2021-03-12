import {sendData} from './api.js';
import {resetMap} from './map.js';

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const main = document.querySelector('main');
const buttonReset = form.querySelector('.ad-form__reset');
const DATA_ERROR_SHOW_TIME = 3000;

/** Функция закрытия сообщений*/
const closeMessage = (message) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      message.remove();
    }
  });

  document.addEventListener('click', () => {
    message.remove();
  });
};

/** Создание сообщения при ошибке загрузки данных с сервера */
const createDataErrorMessage = (message) => {
  const dataErrorMessage = successTemplate.cloneNode(true);
  dataErrorMessage.style.zIndex = 1000;
  const dataErrorText = dataErrorMessage.querySelector('.success__message');
  dataErrorText.textContent = message;
  main.appendChild(dataErrorMessage);

  setTimeout(() => {
    dataErrorMessage.remove();
  },DATA_ERROR_SHOW_TIME);
}

/** Создание сообщения об успешной отправке формы */
const createSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  main.appendChild(successMessage);
  closeMessage(successMessage);
}

/** Создание сообщения об ошибке при отправке формы */
const createErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  const buttonError = errorMessage.querySelector('.error__button');

  main.appendChild(errorMessage);
  closeMessage(errorMessage);

  buttonError.addEventListener('click', () => {
    errorMessage.remove();
  });
}

/** Успешная отправка формы */
const sendFormSuccess = () => {
  createSuccessMessage();
  form.reset();
  resetMap();
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => sendFormSuccess(),
    () => createErrorMessage(),
    new FormData(evt.target),
  )
});

/** Очистка формы */
buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();

  form.reset();
  resetMap();
});


/**
 * Функция деактивации формы
 */
const setFormInactive =() => {
  form.classList.add('ad-form--disabled');
  formElements.forEach((elem) => {
    elem.setAttribute('disabled','disabled');
  });
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersElements.forEach((elem) => {
    elem.setAttribute('disabled','disabled');
  });
}

/**
 * Функция активации формы
 */
const setFormActive =() => {
  form.classList.remove('ad-form--disabled');
  formElements.forEach((elem) => {
    elem.removeAttribute('disabled','disabled');
  });
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersElements.forEach((elem) => {
    elem.removeAttribute('disabled','disabled');
  });
}

export {setFormInactive, setFormActive, createDataErrorMessage};

