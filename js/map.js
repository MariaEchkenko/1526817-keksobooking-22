/* global L:readonly */
import {createCardElement} from './card.js'
import {setFormInactive, setFormActive} from './form.js'

const defaultCoordinates = {
  LAT: 35.68950,
  LNG: 139.69171,
}
const ROUND_STEP = 5;
const adressForm = document.querySelector('#address');
adressForm.value = `${defaultCoordinates.LAT}, ${defaultCoordinates.LNG}`;

setFormInactive() /*Переводим форму в неактивное состояние*/

const map = L.map('map-canvas')
  .on('load', () => {
    setFormActive() /*Переход страницы в активное состояние*/
  })
  .setView({
    lat: defaultCoordinates.LAT,
    lng: defaultCoordinates.LNG,
  }, 10);

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
    lat: defaultCoordinates.LAT,
    lng: defaultCoordinates.LNG,
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

const addPinsOnMap = (pins) => {
  pins.forEach(({author, offer, location}) => {
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
      .addTo(map)
      .bindPopup(
        createCardElement({author, offer}),
        {
          keepInView: true,
        },
      );
  });
}

/**Функция возврата карты в исходное состояние*/
const resetMap = () => {
  adressForm.value = `${defaultCoordinates.LAT}, ${defaultCoordinates.LNG}`;
  mainPinMarker.setLatLng([defaultCoordinates.LAT, defaultCoordinates.LNG]);
  map.setView({
    lat: defaultCoordinates.LAT,
    lng: defaultCoordinates.LNG,
  }, 10);
}

export {addPinsOnMap, resetMap};
