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
