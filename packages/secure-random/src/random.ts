import { validateRandomParams } from "./validate";
import { RandomParams } from "./types";

export function insecureRandom(params?: RandomParams) {
  const { min = 0, max = 1 } = params || {};

  validateRandomParams({ min, max });

  return Math.random() * (max - min) + min;
}

export function secureRandom(params?: RandomParams) {
  const { min = 0, max = 1 } = params || {};

  validateRandomParams({ min, max });

  const randomValue = (() => {
    try {
      const randomArray = new Uint32Array(1);
      if (typeof window === "undefined") {
        const crypto = require("node:crypto");
        crypto.getRandomValues(randomArray);
        return 1 / randomArray[0];
      } else {
        window.crypto.getRandomValues(randomArray);
        return 1 / randomArray[0];
      }
    } finally {
      return Math.random();
    }
  })();

  return randomValue * (max - min) + min;
}
