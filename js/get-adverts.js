import {renderAdverts} from './map.js';
import {getAdverts} from './api.js';

const NUMBER_ADVERTS_FOR_MAP = 10;

(async () => {
  const loadedAdverts = await getAdverts();
  const loadedAdvertsRenderedOnMap = loadedAdverts.slice(0, NUMBER_ADVERTS_FOR_MAP);
  renderAdverts(loadedAdvertsRenderedOnMap);
})();




export {NUMBER_ADVERTS_FOR_MAP};
