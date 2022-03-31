import {HOTEL_TYPES, HOTEL_TYPES_TRANSLATION} from './data.js';

const CARD_TEMPLATE = document.querySelector('#card').content;

function getCapacityText (rooms, guests) {
  let hotelCapacityText = ' комнаты для ';
  let hotelGuestsText = ' гостей';

  if (rooms === 1) {
    hotelCapacityText = ' комната для ';
  }
  if (rooms > 4) {
    hotelCapacityText = ' комнат для ';
  }

  if (guests === 1) {
    hotelGuestsText = ' гостя';
  }
  return String(rooms + hotelCapacityText + guests + hotelGuestsText);
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

  if (dataObject.offer.title)  {
    CARD_TITLE.textContent = dataObject.offer.title;
  } else {
    CARD_TITLE.classList.add('hidden');
  }

  if (dataObject.offer.address)  {
    CARD_ADDRESS.textContent = dataObject.offer.address;
  } else {
    CARD_ADDRESS.classList.add('hidden');
  }

  if (dataObject.offer.price)  {
    CARD_PRICE.textContent = `${dataObject.offer.price}  ₽/ночь`;
  } else {
    CARD_PRICE.classList.add('hidden');
  }

  if (dataObject.offer.type)  {
    CARD_HOTEL_TYPE.textContent = HOTEL_TYPES_TRANSLATION[HOTEL_TYPES.indexOf(dataObject.offer.type)];
  } else {
    CARD_HOTEL_TYPE.classList.add('hidden');
  }
  if (dataObject.offer.guests && dataObject.offer.rooms) {
    CARD_CAPACITY.textContent = getCapacityText(dataObject.offer.rooms, dataObject.offer.guests);
  } else {
    CARD_CAPACITY.classList.add('hidden');
  }

  if (dataObject.offer.checkin && dataObject.offer.checkout) {
    CARD_TIME.textContent = `Заезд после ${dataObject.offer.checkin}, выезд до ${dataObject.offer.checkout}`;
  } else {
    CARD_TIME.classList.add('hidden');
  }

  if (dataObject.offer.features) {
    const modifiers = dataObject.offer.features.map((feature) => `popup__feature--${feature}`);
    CARD_FEATURES.forEach((element) => {
      const modifier = element.classList[1];
      if (!modifiers.includes(modifier)) {
        element.remove();
      }
    });
  } else {CARD_FEATURES.classList.add('hidden');}

  if (dataObject.offer.description) {
    CARD_DESCRIPTION.textContent = dataObject.offer.description;
  } else {
    CARD_DESCRIPTION.classList.add('hidden');
  }

  if (dataObject.offer.photos) {
    CARD_PHOTOS.innerHTML = '';
    dataObject.offer.photos.forEach((url) => {
      const photo = CARD_PHOTO.cloneNode(true);
      photo.src = url;
      CARD_PHOTOS.appendChild(photo);
    });
  } else {CARD_PHOTOS.classList.add('hidden');}

  if (dataObject.author.avatar) {
    CARD_AVATAR.src = dataObject.author.avatar;
  } else {
    CARD_AVATAR.classList.add('hidden');
  }

  return CARD;
}
export {generateOffer};
