import {generateAds} from './mock.js'
import {addPinsOnMap} from './map.js'
import './form.js'
import './validation.js'

const SIMILAR_AD_COUNT = 10;
let dataAds = generateAds(SIMILAR_AD_COUNT);
addPinsOnMap(dataAds);
