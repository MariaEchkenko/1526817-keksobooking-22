const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_RENT = 1000000;

const minPriceRent = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const roomsGuests = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

/** Валидация длины заголовка */
const adTitle = document.querySelector('#title');

adTitle.addEventListener('input', () => {
  const valueLength = adTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Введите ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Слишком длинное название. Удалите ${valueLength - MAX_TITLE_LENGTH } симв.`);
  }  else {
    adTitle.setCustomValidity('');
  }
  adTitle.reportValidity();
});

/** Валидация цены */
const priceForRent = document.querySelector('#price');
const selectTypeOfHouse = document.querySelector('#type');

priceForRent.addEventListener('input', () => {
  let typeValue = selectTypeOfHouse.value
  if (priceForRent.value < minPriceRent[typeValue]) {
    priceForRent.setCustomValidity(`Цена должна быть не менее ${minPriceRent[typeValue]} руб.`);
  } else if (priceForRent.value > MAX_PRICE_RENT) {
    priceForRent.setCustomValidity(`Цена должна быть не более ${MAX_PRICE_RENT} руб.`);
  } else {
    priceForRent.setCustomValidity('');
  }
  priceForRent.reportValidity();
});

selectTypeOfHouse.addEventListener('change', (evt) => {
  priceForRent.min = priceForRent.placeholder = minPriceRent[evt.target.value];
});

/** Синхронизация полей заезда/выезда */
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

/** Валидация полей количество комнат - количество гостей */
const roomNumber = document.querySelector('#room_number');
const numberOfGuest = document.querySelector('#capacity');
const capacityOptions = numberOfGuest.querySelectorAll('option');

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
