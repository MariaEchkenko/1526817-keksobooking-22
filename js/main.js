const SIMILAR_AD_COUNT = 10;
const MIN_X = 35.65000;
const MAX_X = 35.70000;
const MIN_Y = 139.70000;
const MAX_Y = 139.80000;
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
 * Функция, возвращающая случайное целое число из переданного диапазона включительно
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @return {number|null} - случайное число
 */
const getRandomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || (min > max)) {
    return null
  }
  if (min == max) {
    return min
  }
  let randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  return Math.floor(randomInteger);
};

/**
 * Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @param {number} n - количество знаков после запятой
 * @return {number|null} - случайное число
 */
const getRandomDecimalNumber = function (min, max, n) {
  if (min < 0 || max < 0) {
    return null
  }
  if (min == max) {
    return +min.toFixed(n)
  }
  let randomNumber = Math.random() * (max - min) + min;
  return +randomNumber.toFixed(n);
};

/**
 * Функция, возвращающая случайный элемент из массива
 * @param {array} elements - исходный массив
 * @return {string} - случайный элемент массива
 */
const getRandomElementFromArray = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

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
      features: FEATURES.slice(0, getRandomInteger(1, FEATURES.length)),
      description: 'Описание',
      photos: PHOTOS.slice(0, getRandomInteger(1, PHOTOS.length)),
    },
    location: {
      x: x,
      y: y,
    },
  };
};

const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());

console.log (similarAds);
