import {getRandomInteger, getRandomDecimalNumber, getRandomElementFromArray, getRandomArray} from './util.js'

const MIN_X = 35.65;
const MAX_X = 35.7;
const MIN_Y = 139.7;
const MAX_Y = 139.8;
const TITLES =[
  'Шикарный дворец',
  'Милая квартирка в центре Токио',
  'Бунгало у моря',
  'Дом вашей мечты'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = [ 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

/**
 * Функция, генерирующая случайное объявление
 * @return {object}
 */
const createAd = () => {
  let x = getRandomDecimalNumber(MIN_X, MAX_X, 5);
  let y = getRandomDecimalNumber(MIN_Y, MAX_Y, 5);
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: getRandomElementFromArray(TITLES),
      address: x + ', ' + y,
      price: getRandomInteger(1000, 1000000),
      rooms: getRandomInteger(1, 20),
      guests: getRandomInteger(1, 20),
      type: getRandomElementFromArray(TYPES),
      checkin: getRandomElementFromArray(CHECK_TIME),
      checkout: getRandomElementFromArray(CHECK_TIME),
      features: getRandomArray(FEATURES),
      description: 'Описание',
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: x,
      y: y,
    },
  };
};

/*const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());
*/
/**
 * Функция, генерирующая массив со случайными объявлениями
 * @param {number} count - количество элементов массива
 * @return {array}  - массив случайных объявлений
 */
const similarAds = (count) => {
  let ads = [];
  for (let i=0; i < count; i++) {
    ads[i] = createAd();
  }
  return ads;
}

export {similarAds};
