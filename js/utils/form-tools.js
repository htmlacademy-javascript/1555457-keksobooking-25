const SUCCESS_TEMPLATE = document.querySelector('#success').content;
const FAIL_TEMPLATE = document.querySelector('#error').content;
const body = document.querySelector('body');

const SUCCESS_MESSAGE = SUCCESS_TEMPLATE.cloneNode(true);
SUCCESS_MESSAGE.querySelector('div.success').style.display = 'none';
body.appendChild(SUCCESS_MESSAGE);

const FAIL_MESSAGE = FAIL_TEMPLATE.cloneNode(true);
FAIL_MESSAGE.querySelector('div.error').style.display = 'none';
body.appendChild(FAIL_MESSAGE);

let shownMessage;

function showSuccessMessage () {
  shownMessage = document.querySelector('div.success');
  shownMessage.style.display = 'inline';
  document.addEventListener('click', () => {
    shownMessage.style.display = 'none';
  });
}
function showFailMessage () {
  shownMessage = document.querySelector('div.error');
  shownMessage.style.display = 'inline';
  document.addEventListener('click', () => {
    shownMessage.remove();
  });
}
const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { showFailMessage, showSuccessMessage, debounce };
