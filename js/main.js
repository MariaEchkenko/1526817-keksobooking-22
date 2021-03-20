import {debounce} from './util.js';
import {getData} from './api.js';
import {addPinsOnMap, renderPins} from './map.js';
import {createDataErrorMessage} from './popup.js';
import './validation.js';
import {setFilterChange} from './filter.js';

const RERENDER_TIME = 500;

getData(
  (ads) => {
    addPinsOnMap(ads);
    setFilterChange(debounce(() => renderPins(ads), RERENDER_TIME));
  },
  () => createDataErrorMessage('Ошибка при загрузке данных'),
);



