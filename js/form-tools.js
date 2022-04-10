const SUCCESS_TEMPLATE = document.querySelector('#success').content;
const FAIL_TEMPLATE = document.querySelector('#error').content;
const body = document.querySelector('body');

const SUCCESS_MESSAGE = SUCCESS_TEMPLATE.cloneNode(true);
const FAIL_MESSAGE = FAIL_TEMPLATE.cloneNode(true);

let shownMessage;

function showSuccessMessage () {
  body.appendChild(SUCCESS_MESSAGE);
  shownMessage = document.querySelector('div.success');
  document.addEventListener('click', () => {
    shownMessage.remove();

  });
}
function showFailMessage () {
  body.appendChild(FAIL_MESSAGE);
  shownMessage = document.querySelector('div.error');
  document.addEventListener('click', () => {
    shownMessage.remove();
  });
}


export { showFailMessage, showSuccessMessage };
