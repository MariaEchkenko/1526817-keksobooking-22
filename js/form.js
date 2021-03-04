const minPriceRent = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const selectTypeOfHouse = document.querySelector('#type');
const priceForRent = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

selectTypeOfHouse.addEventListener('change', (evt) => {
  priceForRent.min = priceForRent.placeholder = minPriceRent[evt.target.value];
})

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
})

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
})


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


