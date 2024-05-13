import { secureRandom } from "@oneweek.lee/secure-random";

export function getRandomDiceNumber() {
  return Math.floor(secureRandom({ min: 1, max: 7 }));
}
