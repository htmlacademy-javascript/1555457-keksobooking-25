const FORM = document.querySelector('.ad-form');
const FIELDS = FORM.querySelectorAll('fieldset');

function enableForm() {
  FORM.removeAttribute('disabled');
  FIELDS.forEach((element) => element.removeAttribute('disabled'));
}

export { enableForm };
