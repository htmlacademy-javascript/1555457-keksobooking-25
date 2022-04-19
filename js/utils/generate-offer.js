import {HOTEL_TYPES, HOTEL_TYPES_TRANSLATIONS} from './data.js';

const cardTemplate = document.querySelector('#card').content;
let card = cardTemplate.cloneNode(true);

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
  card = cardTemplate.cloneNode(true);

  if (dataObject.offer.title)  {
    card.querySelector('.popup__title').textContent = dataObject.offer.title;
  } else {
    card.querySelector('.popup__title').classList.add('hidden');
  }

  if (dataObject.offer.address)  {
    card.querySelector('.popup__text--address').textContent = dataObject.offer.address;
  } else {
    card.querySelector('.popup__text--address').classList.add('hidden');
  }

  if (dataObject.offer.price)  {
    card.querySelector('.popup__text--price').textContent = `${dataObject.offer.price}  ₽/ночь`;
  } else {
    card.querySelector('.popup__text--price').classList.add('hidden');
  }

  if (dataObject.offer.type)  {
    card.querySelector('.popup__type').textContent = HOTEL_TYPES_TRANSLATIONS[HOTEL_TYPES.indexOf(dataObject.offer.type)];
  } else {
    card.querySelector('.popup__type').classList.add('hidden');
  }
  if (dataObject.offer.guests && dataObject.offer.rooms) {
    card.querySelector('.popup__text--capacity').textContent = getCapacityText(dataObject.offer.rooms, dataObject.offer.guests);
  } else {
    card.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  if (dataObject.offer.checkin && dataObject.offer.checkout) {
    card.querySelector('.popup__text--time').textContent = `Заезд после ${dataObject.offer.checkin}, выезд до ${dataObject.offer.checkout}`;
  } else {
    card.querySelector('.popup__text--time').classList.add('hidden');
  }

  if (dataObject.offer.features) {
    const modifiers = dataObject.offer.features.map((feature) => `popup__feature--${feature}`);
    card.querySelectorAll('.popup__feature').forEach((element) => {
      const modifier = element.classList[1];
      if (!modifiers.includes(modifier)) {
        element.remove();
      }
    });
  } else {card.querySelector('.popup__features').classList.add('hidden');}

  if (dataObject.offer.description) {
    card.querySelector('.popup__description').textContent = dataObject.offer.description;
  } else {
    card.querySelector('.popup__description').classList.add('hidden');
  }

  if (dataObject.offer.photos) {
    card.querySelector('.popup__photos').innerHTML = '';
    dataObject.offer.photos.forEach((url) => {
      const photo = cardTemplate.querySelector('.popup__photo').cloneNode(true);
      photo.src = url;
      card.querySelector('.popup__photos').appendChild(photo);
    });
  } else { card.querySelector('.popup__photos').classList.add('hidden');}

  if (dataObject.author.avatar) {
    card.querySelector('.popup__avatar').src = dataObject.author.avatar;
  } else {

    card.querySelector('.popup__avatar').classList.add('hidden');
  }
  return card;
}
export {generateOffer};
