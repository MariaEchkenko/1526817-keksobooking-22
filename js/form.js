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

export {setFormInactive, setFormActive};

