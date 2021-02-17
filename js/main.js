import {generateAds} from './mock.js'
import {createCardElement} from './card.js'
import './form.js'

const SIMILAR_AD_COUNT = 10;
const mapCanvas = document.querySelector('.map__canvas');

let dataAds = generateAds(SIMILAR_AD_COUNT);
let cardAd = createCardElement(dataAds[0]);

mapCanvas.appendChild(cardAd);

