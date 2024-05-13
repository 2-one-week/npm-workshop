import { RandomParams } from "./types";

class InvalidateError extends Error {
  constructor() {
    super();
    this.name = "InvalidateError";
    this.message =
      "min값이 max값보다 크거나 같습니다. min 값을 max값보다 작은 값으로 넣어주세요.";
  }
}

export function validateRandomParams(params: RandomParams) {
  const { min = 0, max = 1 } = params;
  if (min >= max) {
    throw new InvalidateError();
  }
}
