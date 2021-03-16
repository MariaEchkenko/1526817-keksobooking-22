const AD_COUNT = 10;
const selectHouseType = document.querySelector('#housing-type');

/**
 * Правило фильтрации по типу жилья
 * @param {object} element - объявление, приходящее с сервера
 * @return {Boolean}
 */
const filterRule = (element) => {
  let isType = true;
  if (selectHouseType.value !== 'any') {
    isType = element.offer.type === selectHouseType.value;
  }
  return isType;
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
/* Первоначальный вариант, перебирающий весь массив объявления с сервера
const filtredData = (data) => {
  return data.filter(filterRule).slice(0, AD_COUNT);
};*/


/* Функция установки фильтра */
const setFilterChange = (cb) => {
  selectHouseType.addEventListener('change', () => {
    cb();
  })
}

export {filtredData, setFilterChange};

