import './form-validation.js';
import './map.js';
import './server-api.js';
import './on-form-change.js';
import { disableForm } from './utils/control-page-state.js';


document.addEventListener('load', () => {
  disableForm();
});
