import {mapFilters} from './form.js';

const AD_COUNT = 10;
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

const selectHouseType = document.querySelector('#housing-type');
const selectHouseRooms = document.querySelector('#housing-rooms');
const selectHouseGuests = document.querySelector('#housing-guests');
const selectHousePrice = document.querySelector('#housing-price');

/**
 * Правило фильтрации объекта
 * @param {object} ad - объявление, приходящее с сервера
 * @return {Boolean}
 */
const filterRules = (ad) => {
  let isType = true;
  let isRooms = true;
  let isGuests = true;
  let isPrice = true;
  let isFeatures = true;

  if (selectHouseType.value !== 'any') {
    isType = ad.offer.type === selectHouseType.value;
  }

  if (selectHouseRooms.value !== 'any') {
    isRooms = ad.offer.rooms.toString() === selectHouseRooms.value;
  }

  if (selectHouseGuests.value !== 'any') {
    isRooms = ad.offer.guests.toString() === selectHouseGuests.value;
  }

  let selectPrice = selectHousePrice.value;
  if (selectPrice!== 'any') {
    isPrice = ad.offer.price >= priceRange[selectPrice].min && ad.offer.price < priceRange[selectPrice].max
  }

  let checkedFeatures = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkedFeatures) {
    checkedFeatures.forEach((feature) => {
      if (ad.offer.features.indexOf(feature.value) === -1) {
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
const filterData = (data) => {
  const filtredAds = [];

  data.forEach((ad) => {
    if (filterRules(ad)) {
      filtredAds.push(ad);
    }
    if (filtredAds.length === AD_COUNT) {
      return filtredAds;
    }
  })

  return filtredAds;
};

/**
 *  Функция установки фильтра
 *  @param {} cb - колбэк, вызываемый при изменении фильтра
*/
const onFilterChange = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  })
}

export {filterData, onFilterChange};

