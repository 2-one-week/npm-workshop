import crypto from "node:crypto";
import { RandomParams } from "./types";
import { validateRandomParams } from "./validate";

export function secureRandom(params?: RandomParams) {
  const { min = 0, max = 1 } = params || {};

  validateRandomParams({ min, max });

  const randomValue = (() => {
    try {
      const randomArray = new Uint32Array(1);
      crypto.getRandomValues(randomArray);
      return 1 / randomArray[0];
    } finally {
      return Math.random();
    }
  })();

  return randomValue * (max - min) + min;
}
