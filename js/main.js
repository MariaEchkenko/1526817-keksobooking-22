import {getData} from './api.js'
import {addPinsOnMap, renderPins} from './map.js'
import {createDataErrorMessage} from './popup.js'
/*import './form.js'*/
import './validation.js'
import {setFilterChange} from './filter.js'

getData(
  (ads) => {
    addPinsOnMap(ads);
    setFilterChange(() => renderPins(ads));
  },
  () => createDataErrorMessage('Ошибка при загрузке данных'),
);



