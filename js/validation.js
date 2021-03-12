const minPriceRent = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};
const maxPriceRent = 1000000;
const selectTypeOfHouse = document.querySelector('#type');
const priceForRent = document.querySelector('#price');

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const adTitle = document.querySelector('#title');

const roomNumber = document.querySelector('#room_number');
const numberOfGuest = document.querySelector('#capacity');
const capacityOptions = numberOfGuest.querySelectorAll('option');
const roomsGuests = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

/** Валидация заголовка */
adTitle.addEventListener('invalid', () => {
  if (adTitle.validity.tooShort) {
    adTitle.setCustomValidity('Заголовок должен состоять минимум из 30-ти символов');
  } else if (adTitle.validity.tooLong) {
    adTitle.setCustomValidity('Заголовок не должен превышать 100 символов');
  } else if (adTitle.validity.valueMissing) {
    adTitle.setCustomValidity('Обязательное поле');
  } else {
    adTitle.setCustomValidity('');
  }
});

/** Валидация цены */
priceForRent.addEventListener('input', () => {
  let typeValue = selectTypeOfHouse.value
  if (priceForRent.value < minPriceRent[typeValue]) {
    priceForRent.setCustomValidity(`Цена должна быть не менее ${minPriceRent[typeValue]} руб.`);
  } else if (priceForRent.value > maxPriceRent) {
    priceForRent.setCustomValidity(`Цена должна быть не более ${maxPriceRent} руб.`);
  } else {
    priceForRent.setCustomValidity('');
  }
  priceForRent.reportValidity();
});

selectTypeOfHouse.addEventListener('change', (evt) => {
  priceForRent.min = priceForRent.placeholder = minPriceRent[evt.target.value];
});

/** Синхронизация полей заезда/выезда */
timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

/** Валидация полей количество комнат - количество гостей */
capacityOptions.forEach((option) => {
  option.disabled = true;
});
capacityOptions[2].disabled = false;

roomNumber.addEventListener('change', () => {
  let roomValue = roomNumber.value;

  capacityOptions.forEach((option) => {
    option.disabled = true;

    if (roomsGuests[roomValue].includes(+option.value)) {
      option.disabled = false;
      option.selected = true;
    }
  });
});
