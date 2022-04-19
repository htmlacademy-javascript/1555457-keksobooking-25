const successTemplate = document.querySelector('#success').content;
const failTemplate = document.querySelector('#error').content;
const body = document.querySelector('body');

const successMessage = successTemplate.cloneNode(true);
const failMessage = failTemplate.cloneNode(true);

failMessage.querySelector('div.error').style.display = 'none';
body.appendChild(failMessage);
successMessage.querySelector('div.success').style.display = 'none';
body.appendChild(successMessage);

let shownMessage;

function showSuccessMessage () {
  shownMessage = document.querySelector('div.success');
  shownMessage.style.display = 'inline';
  document.addEventListener('click', () => {
    shownMessage.style.display = 'none';
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      shownMessage.style.display = 'none';
    }
  });
}
function showFailMessage () {
  shownMessage = document.querySelector('div.error');
  shownMessage.style.display = 'inline';
  document.addEventListener('click', () => {
    shownMessage.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      shownMessage.style.display = 'none';
    }
  });
}
const debounce = (callback, timeoutDelay) => {
  setTimeout(() => {
    callback();
  }, timeoutDelay);
};

export { showFailMessage, showSuccessMessage, debounce };
