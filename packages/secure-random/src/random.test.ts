import { secureRandom, insecureRandom } from "./random";

describe("secureRandom", () => {
  it("secureRandom에 아무런 값을 주입하지 않으면, 0~1 사이의 랜덤한 값을 생성합니다.", () => {
    const randomValue = secureRandom();
    expect(randomValue).toBeGreaterThan(0);
    expect(randomValue).toBeLessThan(1);
  });

  it("secureRandom에 max를 주입하면, 0~max 사이의 랜덤한 값을 생성합니다.", () => {
    const randomMax = Math.floor(secureRandom({ max: 100 })); // 100 이하의 정수
    const randomValue = secureRandom({ max: randomMax });
    expect(randomValue).toBeGreaterThan(0);
    expect(randomValue).toBeLessThan(randomMax);
  });

  it("secureRandom에 min, max을 주입하면, min~max 사이의 랜덤한 값을 생성합니다.", () => {
    const randomMin = Math.floor(secureRandom({ max: 50 })); // 50 이하의 정수
    const randomMax = Math.floor(secureRandom({ min: 50, max: 100 })); // 50~100 이하의 정수
    const randomValue = secureRandom({ min: randomMin, max: randomMax });
    expect(randomValue).toBeGreaterThan(randomMin);
    expect(randomValue).toBeLessThan(randomMax);
  });

  it("secureRandom에 max보다 크거나 같은 min을 주입하면, 에러를 발생합니다.", () => {
    try {
      const randomMin = Math.floor(secureRandom({ min: 50, max: 100 })); // 50~100 이하의 정수
      const randomMax = Math.floor(secureRandom({ max: 50 })); // 50 이하의 정수
      secureRandom({ min: randomMin, max: randomMax });
    } catch (error) {
      if (error instanceof Error) {
        expect(error.name).toEqual("InvalidateError");
      }
    }
  });
});

describe("insecureRandom", () => {
  it("insecureRandom에 아무런 값을 주입하지 않으면, 0~1 사이의 랜덤한 값을 생성합니다.", () => {
    const randomValue = insecureRandom();
    expect(randomValue).toBeGreaterThan(0);
    expect(randomValue).toBeLessThan(1);
  });

  it("insecureRandom에 max를 주입하면, 0~max 사이의 랜덤한 값을 생성합니다.", () => {
    const randomMax = Math.floor(insecureRandom({ max: 100 })); // 100 이하의 정수
    const randomValue = insecureRandom({ max: randomMax });
    expect(randomValue).toBeGreaterThan(0);
    expect(randomValue).toBeLessThan(randomMax);
  });

  it("insecureRandom에 min, max을 주입하면, min~max 사이의 랜덤한 값을 생성합니다.", () => {
    const randomMin = Math.floor(insecureRandom({ max: 50 })); // 50 이하의 정수
    const randomMax = Math.floor(insecureRandom({ min: 50, max: 100 })); // 50~100 이하의 정수
    const randomValue = insecureRandom({ min: randomMin, max: randomMax });
    expect(randomValue).toBeGreaterThan(randomMin);
    expect(randomValue).toBeLessThan(randomMax);
  });

  it("insecureRandom에 max보다 크거나 같은 min을 주입하면, 에러를 발생합니다.", () => {
    try {
      const randomMin = Math.floor(insecureRandom({ min: 50, max: 100 })); // 50~100 이하의 정수
      const randomMax = Math.floor(insecureRandom({ max: 50 })); // 50 이하의 정수
      insecureRandom({ min: randomMin, max: randomMax });
    } catch (error) {
      if (error instanceof Error) {
        expect(error.name).toEqual("InvalidateError");
      }
    }
  });
});
