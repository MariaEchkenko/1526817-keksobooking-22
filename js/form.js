import {sendData} from './api.js';
import {resetMap, clearPins, renderPins} from './map.js';
import {createSuccessPopup, createErrorPopup} from './popup.js';

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

/**
 * Перевод страницы в исходное состояние
 * @param {*} data - массив объявлений, приходящих с сервера
 */
const setDefault = (data) => {
  form.reset();
  mapFilters.reset();
  resetMap();
  clearPins();
  renderPins(data)
}

/**
 * Функция, вызываемая при успешной отправке формы
 * @param {array} data - массив объявлений, приходящих с сервера
 */
const sendFormSuccess = (data) => {
  createSuccessPopup();
  setDefault(data);
}

/**
 * Отправка формы
 * @param {array} data - массив объявлений, приходящих с сервера
 */
const sendForm = (data) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => sendFormSuccess(data),
      createErrorPopup,
      new FormData(evt.target));
  });
}

const buttonReset = form.querySelector('.ad-form__reset');

/**
 * Очистка формы
 * @param {array} data - массив объявлений, приходящих с сервера
 */
const resetForm = (data) => {
  buttonReset.addEventListener('click', (evt) => {
    evt.preventDefault();

    setDefault(data)
  });
}

export {mapFilters, setFormInactive, setFormActive, sendForm, resetForm};
