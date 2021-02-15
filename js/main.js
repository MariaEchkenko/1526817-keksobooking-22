import {generateAds} from './mock.js'
import {createCardElement} from './card.js'

const SIMILAR_AD_COUNT = 10;
const mapCanvas = document.querySelector('.map__canvas');

let cardAds = generateAds(SIMILAR_AD_COUNT);
let cardAd = createCardElement(cardAds[0]);

mapCanvas.appendChild(cardAd);

