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
}

getRandomInteger(1,5);

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
}

getRandomDecimalNumber(1.1,1.6,3);


/*В файле main.js на основе написанных в прошлом задании утилитарных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

Структура каждого объекта должна быть следующей:

author, объект — описывает автора. Содержит одно поле:

  avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.

offer, объект — содержит информацию об объявлении. Состоит из полей:

  title, строка — заголовок предложения. Придумайте самостоятельно.
  address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
  price, число — стоимость. Любое положительное число.
  type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.
  rooms, число — количество комнат. Любое положительное число.
  guests, число — количество гостей, которое можно разместить. Любое положительное число.
  checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  description, строка — описание помещения. Придумайте самостоятельно.
  photos, массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.

location, объект — местоположение в виде географических координат. Состоит из двух полей:

  x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
  y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000*/

const types = ['palace', 'flat', 'house', 'bungalow'];
const checkins = ['12:00', '13:00', '14:00'];
const checkouts = ['12:00', '13:00', '14:00'];
const features = [ 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const createAuthor = () => {
  return {
    avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
  };
};

const createLocation = () => {
  return {
    x: getRandomDecimalNumber(35.65000, 35.70000, 5),
    y: getRandomDecimalNumber(139.70000, 139.80000, 5),
  };
};

const createOffer = () => {
  return {
    title: 'Заголовок',
    address: Object.values(createLocation()).join(', '),
    price: getRandomInteger(0, 99999999),
    rooms: getRandomInteger(0, 100),
    guests: getRandomInteger(0, 100),
    type: getRandomArrayElement(types),
    checkin: getRandomArrayElement(checkins),
    checkout: getRandomArrayElement(checkouts),
    features: '',
    description: 'Описание',
    photos: '',
  };
};

const createAd = () => {
  return {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  }
}

const similarAds = new Array(10).fill(null).map(() => createAd());

console.log (similarAds);
