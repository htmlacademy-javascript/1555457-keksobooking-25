import { renderMarkers, showErrorMessage } from './map.js';
import { clearForm } from './utils/control-page-state.js';

function loadData() {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => (response.ok ? response.json() : showErrorMessage('Ошибка загрузки')))
    .then((hotelsData) => renderMarkers(hotelsData))
    .catch((e) => showErrorMessage(e));
}
function sendData(success, fail, body) {
  fetch('https://25.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        success();
        clearForm();
      } else {
        fail();
      }
    });
}
export {loadData, sendData};
