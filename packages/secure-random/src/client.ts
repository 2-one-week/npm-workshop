import { RandomParams } from "./types";
import { validateRandomParams } from "./validate";

export function secureRandomWhenClientSide(params?: RandomParams) {
  const { min = 0, max = 1 } = params || {};

  if (typeof window === "undefined") {
    throw new Error("client side에서 실행시켜주세요.");
  }

  validateRandomParams({ min, max });

  const randomValue = (() => {
    try {
      const randomArray = new Uint32Array(1);
      window.crypto.getRandomValues(randomArray);
      return 1 / randomArray[0];
    } finally {
      return Math.random();
    }
  })();

  return randomValue * (max - min) + min;
}
