/* global L:readonly */
import {dataAds} from './mock.js'
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
  }, 12);

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

dataAds.forEach(({author, offer, location}) => {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: location.x,
      lng: location.y,
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
