import './form-validation.js';
import './map.js';
import './server-api.js';
import { disableForm } from './utils/control-page-state.js';
import './on-form-change.js';

document.addEventListener('load', () => {
  disableForm();
});
