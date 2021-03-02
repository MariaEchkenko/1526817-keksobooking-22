import './mock.js';

const propertyType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};
const ROOMS = ['комната', 'комнаты', 'комнат'];
const GUESTS = ['гостя', 'гостей', 'гостей'];

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

/**
 * Функция для склонения существительных
 * @param {number} numeral - числовое значение
 * @param {array} declension - массив с вариантами склонения существительного
 * @return {*}
 */
const makePlural = (numeral, declension) => {
  let n = numeral % 10;
  if (n == 1 & numeral != 11) {
    return `${numeral} ${declension[0]}`;
  }
  if ((numeral < 10 || numeral > 20) && (n == 2 || n == 3 || n == 4)) {
    return `${numeral} ${declension[1]}`;
  }
  return `${numeral} ${declension[2]}`;
}

/**
 * Функция для создания списка преимуществ
 * @param {array} featuresArray - исходный массив преимуществ
 * @return {*} - фрагмент из преимуществ в форме тегов <li> с необходимыми классами
 */
const createFeaturesItem = (featuresArray) => {
  const featuresFragment = document.createDocumentFragment();
  for (let i = 0; i < featuresArray.length; i++) {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature', 'popup__feature--' + featuresArray[i]);
    featuresFragment.appendChild(featureItem);
  }
  return featuresFragment;
};

/**
 * Функция для создания списка фото
 * @param {array} photosArray - исходный массив фото
 * @param {*} template - шаблон тега <img> из разметки
 * @return {*} - фрагмент из фото в форме тегов <img> с необходимыми src
 */
const createPhotos = (photosArray, template) => {
  const photosFragment = document.createDocumentFragment();
  for (let i = 0; i < photosArray.length; i++) {
    const photo = template.cloneNode(true);
    photo.src = photosArray[i];
    photosFragment.appendChild(photo);
  }
  return photosFragment;
}

const createCardElement = (createAd) => {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.popup__avatar').src = createAd.author.avatar;
  card.querySelector('.popup__title').textContent = createAd.offer.title;
  card.querySelector('.popup__text--address').textContent = createAd.offer.address;
  card.querySelector('.popup__text--price').textContent = `${createAd.offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = propertyType[createAd.offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${makePlural(createAd.offer.rooms, ROOMS)} для ${makePlural(createAd.offer.guests, GUESTS)}`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${createAd.offer.checkin}, выезд до ${createAd.offer.checkout}`;
  card.querySelector('.popup__description').textContent = createAd.offer.description;

  const featuresList = card.querySelector('.popup__features');
  featuresList.innerHTML = ''; //удаляем в разметке все элементы списка преимуществ
  const cardFeaturesItems = createFeaturesItem(createAd.offer.features); //создаем список в соответствии с нашим случайным массивом
  featuresList.appendChild(cardFeaturesItems); //вставляем в разметку

  const imgList = card.querySelector('.popup__photos');
  const imgTemplate = imgList.querySelector('.popup__photo'); // находим шаблон для img
  imgList.innerHTML = ''; //удаляем в разметке все элементы блока фото
  const cardPhotos = createPhotos(createAd.offer.photos, imgTemplate); //создаем список в соответствии с нашим случайным массивом
  imgList.appendChild(cardPhotos); //вставляем в разметку

  return card;
};

export {createCardElement};



