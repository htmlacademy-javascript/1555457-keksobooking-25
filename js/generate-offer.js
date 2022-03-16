import {HOTEL_TYPES, HOTEL_TYPES_TRANSLATION} from './data.js';

const CARD_TEMPLATE = document.querySelector('#card').content;
const MAP_CANVAS = document.querySelector('#map-canvas');

function isEmpty (data, element) {
  if (!data) {
    element.classList.add('hidden');
  }
}

function generateOffer (dataObject) {
  const CARD = CARD_TEMPLATE.cloneNode(true);

  const CARD_TITLE = CARD.querySelector('.popup__title');
  const CARD_ADDRESS = CARD.querySelector('.popup__text--address');
  const CARD_PRICE = CARD.querySelector('.popup__text--price');
  const CARD_HOTEL_TYPE = CARD.querySelector('.popup__type');
  const CARD_CAPACITY = CARD.querySelector('.popup__text--capacity');
  const CARD_TIME = CARD.querySelector('.popup__text--time');
  const CARD_FEATURES = CARD.querySelectorAll('.popup__feature');
  const CARD_DESCRIPTION = CARD.querySelector('.popup__description');
  const CARD_PHOTOS = CARD.querySelector('.popup__photos');
  const CARD_PHOTO = CARD.querySelector('.popup__photo');
  const CARD_AVATAR = CARD.querySelector('.popup__avatar');

  CARD_TITLE.textContent = dataObject.offer.title;
  isEmpty(dataObject.offer.title, CARD_TITLE);

  CARD_ADDRESS.textContent = dataObject.offer.address;
  isEmpty(dataObject.offer.address, CARD_ADDRESS);

  CARD_PRICE.textContent = `${dataObject.offer.price}  ₽/ночь`;
  isEmpty(dataObject.offer.price, CARD_PRICE);

  CARD_HOTEL_TYPE.textContent = HOTEL_TYPES_TRANSLATION[HOTEL_TYPES.indexOf(dataObject.offer.type)];
  isEmpty(dataObject.offer.type, CARD_HOTEL_TYPE);

  CARD_CAPACITY.textContent = `${dataObject.offer.rooms} комнаты для ${dataObject.offer.guests} гостей`;
  isEmpty(dataObject.offer.rooms, CARD_CAPACITY);
  isEmpty(dataObject.offer.guests, CARD_CAPACITY);

  CARD_TIME.textContent = `Заезд после ${dataObject.offer.checkin}, выезд до ${dataObject.offer.checkout}`;
  isEmpty(dataObject.offer.checkin, CARD_TIME);
  isEmpty(dataObject.offer.checkout, CARD_TIME);

  if (dataObject.offer.features) {
    const modifiers = dataObject.offer.features.map((feature) => `popup__feature--${feature}`);
    CARD_FEATURES.forEach((element) => {
      const modifier = element.classList[1];
      if (!modifiers.includes(modifier)) {
        element.remove();
      }
    });
} else {isEmpty(dataObject.offer.features, CARD_FEATURES)};

  CARD_DESCRIPTION.textContent = dataObject.offer.description;
  isEmpty(dataObject.offer.description, CARD_DESCRIPTION);

if (dataObject.offer.photos) {
  CARD_PHOTOS.innerHTML = '';
  dataObject.offer.photos.forEach((url) => {
    const photo = CARD_PHOTO.cloneNode(true);
    photo.src = url;
    CARD_PHOTOS.appendChild(photo);
  });
  CARD_AVATAR.src = dataObject.author.avatar;
} else {isEmpty(dataObject.offer.photos, CARD_PHOTOS)};

  MAP_CANVAS.appendChild(CARD);
}
export {generateOffer};
