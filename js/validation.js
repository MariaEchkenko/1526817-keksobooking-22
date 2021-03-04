import {minPriceRent, selectTypeOfHouse, priceForRent} from './form.js'

const adTitle = document.querySelector('#title');
const maxPriceRent = 1000000;

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

priceForRent.addEventListener('input', () => {
  let typeValue = selectTypeOfHouse.value
  if (priceForRent.value < minPriceRent[typeValue]) {
    priceForRent.setCustomValidity(`Текущая цена меньше минимальной на ${minPriceRent[typeValue] - priceForRent.value} руб.`);
  } else if (priceForRent.value > maxPriceRent) {
    priceForRent.setCustomValidity(`Текущая цена больше максимальной на ${priceForRent.value - maxPriceRent} руб.`);
  } else {
    priceForRent.setCustomValidity('');
  }
  priceForRent.reportValidity();
});
