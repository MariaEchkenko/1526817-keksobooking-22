import {sendData} from './api.js';
import {resetMap} from './map.js';
import {createSuccessMessage, createErrorMessage} from './popup.js';

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');

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

/** Успешная отправка формы */
const sendFormSuccess = () => {
  createSuccessMessage();
  form.reset();
  resetMap();
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(sendFormSuccess, createErrorMessage, new FormData(evt.target));
});

const buttonReset = form.querySelector('.ad-form__reset');

/** Очистка формы */
buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();

  form.reset();
  mapFilters.reset();
  resetMap();
});

export {setFormInactive, setFormActive};

