/* global L:readonly */
import {createCardElement} from './card.js'
import {setFormInactive, setFormActive} from './form.js'
import {filtredData} from './filter.js'

const DefaultCoordinates = {
  LAT: 35.68950,
  LNG: 139.69171,
}
const ROUND_STEP = 5;
const ZOOM_SCALE = 10;
const adressForm = document.querySelector('#address');
adressForm.value = `${DefaultCoordinates.LAT}, ${DefaultCoordinates.LNG}`;

setFormInactive() /*Переводим форму в неактивное состояние*/

const map = L.map('map-canvas')
  .on('load', () => {
    setFormActive() /*Переход страницы в активное состояние*/
  })
  .setView({
    lat: DefaultCoordinates.LAT,
    lng: DefaultCoordinates.LNG,
  }, ZOOM_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: DefaultCoordinates.LAT,
    lng: DefaultCoordinates.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  adressForm.value = `${evt.target.getLatLng().lat.toFixed(ROUND_STEP)},
  ${evt.target.getLatLng().lng.toFixed(ROUND_STEP)}`;
});

/**
 * Функция создания меток
 * @param {array} ads - массив объявлений
 * @param {*} layer - слой, принимающий созданные метки
 * @return {array}  - массив созданных меток
 */
const createPins = (ads, layer) => {
  ads.forEach(({author, offer, location}) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(layer)
      .bindPopup(
        createCardElement({author, offer}),
        {
          keepInView: true,
        },
      );
  })
}

let layerPins;

/**
 * Отрисовка меток на карте
 * @param {array} data - массив всех объявлений, полученных с сервера
 * @return {*}
 */
const addPinsOnMap = (data) => {
  const markers = filtredData(data);
  layerPins = L.layerGroup();
  createPins(markers, layerPins);
  layerPins.addTo(map);
};

/**
 * Ререндеринг меток при фильтрации
 * @param {array} data - массив всех объявлений, полученных с сервера
 * @return {*}
 */
const renderPins = (data) => {
  map.removeLayer(layerPins);
  addPinsOnMap(data);
}

/**Функция возврата карты в исходное состояние*/
const resetMap = () => {
  adressForm.value = `${DefaultCoordinates.LAT}, ${DefaultCoordinates.LNG}`;
  mainPinMarker.setLatLng([DefaultCoordinates.LAT, DefaultCoordinates.LNG]);
  map.setView({
    lat: DefaultCoordinates.LAT,
    lng: DefaultCoordinates.LNG,
  }, ZOOM_SCALE);
  map.removeLayer(layerPins);
}

export {addPinsOnMap, renderPins, resetMap};
