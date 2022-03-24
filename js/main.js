import {createLandingArray} from './create-landing-array.js';
import {generateOffer} from './generate-offer.js';
import './form-validation.js';

const CARD_DATA = createLandingArray();
generateOffer(CARD_DATA[1]);

