import stringParse from './stringParse';
import ari from './ari';

const content = 'Cat ipsum dolor sit amet, cereal boxes make for five star accommodation roll over and sun my belly. Leave dead animals as gifts russian blue, sleep catch mouse and gave it as a present. Eat owner\'s food. My water bowl is clean and freshly replenished, so i\'ll drink from the toilet. Eat half my food and ask for more. Use lap as chair.';

const parsedSentence = stringParse(content);

const ariCheck = ari(parsedSentence);

console.log(ariCheck);