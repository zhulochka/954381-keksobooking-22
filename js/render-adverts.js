import {renderSimilarAdverts} from './map.js';
import {loadSimilarAdverts} from './api.js';


(async () => {
  const similarAdverts = await loadSimilarAdverts()
  renderSimilarAdverts(similarAdverts);

})();
