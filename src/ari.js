import automatedReadability from 'automated-readability';
import { ARI_VALS } from './consts';

export default function ari(parsedString) {

  const ari = Math.round(automatedReadability(parsedString));

  const valKeys = Object.keys(ARI_VALS);
  let currentDiff, smallestDiff = Math.abs(ari - valKeys[0]), closest = 0;

  for (let i = 0; i < valKeys.length; i++) {
    currentDiff = Math.abs(ari - valKeys[i]);
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      closest = i;
    }
  }

  return ARI_VALS[valKeys[closest]];
}