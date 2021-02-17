const MINPRICERENT = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const selectTypeOfHouse = document.querySelector('#type');
const minPriceForRent = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

selectTypeOfHouse.addEventListener('change', (evt) => {
  minPriceForRent.placeholder = MINPRICERENT[evt.target.value];
})

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
})

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
})
