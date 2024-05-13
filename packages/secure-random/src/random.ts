interface RandomParams {
  min?: number;
  max?: number;
}

class InvalidateError extends Error {
  constructor() {
    super();
    this.name = "InvalidateError";
    this.message =
      "min값이 max값보다 크거나 같습니다. min 값을 max값보다 작은 값으로 넣어주세요.";
  }
}

function validateRandomParams(params: RandomParams) {
  const { min = 0, max = 1 } = params;
  if (min >= max) {
    throw new InvalidateError();
  }
}

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
