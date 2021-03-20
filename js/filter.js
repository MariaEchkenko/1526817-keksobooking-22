import {mapFilters} from './form.js';

const AD_COUNT = 10;
const selectHouseType = document.querySelector('#housing-type');
const selectHouseRooms = document.querySelector('#housing-rooms');
const selectHouseGuests = document.querySelector('#housing-guests');
const selectHousePrice = document.querySelector('#housing-price');
const priceRange = {
  low: {
    min: 0,
    max: 10000,
  },
  middle:{
    min: 10000,
    max: 50000,
  },
  high:{
    min: 50000,
    max: 1000000,
  },
};

/**
 * Правило фильтрации объекта
 * @param {object} element - объявление, приходящее с сервера
 * @return {Boolean}
 */
const filterRule = (element) => {
  let isType = true;
  let isRooms = true;
  let isGuests = true;
  let isPrice = true;
  let isFeatures = true;

  if (selectHouseType.value !== 'any') {
    isType = element.offer.type === selectHouseType.value;
  }

  if (selectHouseRooms.value !== 'any') {
    isRooms = element.offer.rooms.toString() === selectHouseRooms.value;
  }

  if (selectHouseGuests.value !== 'any') {
    isRooms = element.offer.guests.toString() === selectHouseGuests.value;
  }

  let selectPrice = selectHousePrice.value;
  if (selectPrice!== 'any') {
    isPrice = element.offer.price >= priceRange[selectPrice].min && element.offer.price < priceRange[selectPrice].max
  }

  let checkedFeatures = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkedFeatures.length !== 0) {
    checkedFeatures.forEach((feature) => {
      if (element.offer.features.indexOf(feature.value) === -1) {
        isFeatures = false;
      }
    });
  }

  return (isType && isRooms && isGuests && isPrice && isFeatures);
};

/**
 * Функция фильтрации объявлений
 * @param {array} data - массив всех объявлений, полученных с сервера
 * @return {array} - массив отфильтрованных объявлений
 */
const filtredData = (data) => {
  const filtredAds = [];
  let ad;
  for (let i = 0; i < data.length; i++) {
    ad = data[i];
    if (filterRule(ad)) {
      filtredAds.push(ad);
    }
    if (filtredAds.length === AD_COUNT) {
      return filtredAds;
    }
  }
  return filtredAds;
};

/**
 *  Функция установки фильтра
 *  @param {} cb - колбэк, вызываемый при изменении фильтра
*/
const setFilterChange = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  })
}

export {filtredData, setFilterChange};

