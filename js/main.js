import {getData} from './api.js'
import {addPinsOnMap} from './map.js'
import {createDataErrorMessage} from './form.js'
import './form.js'
import './validation.js'

getData(
  (ads) => addPinsOnMap(ads),
  () => createDataErrorMessage('Ошибка при загрузке данных'),
);



