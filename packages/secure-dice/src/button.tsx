"use client";

import { useState } from "react";
import { getRandomDiceNumber } from "./utils";

export function Button({ ssrNumber }: { ssrNumber: number }) {
  const [num, setNum] = useState<number>(ssrNumber);

  return (
    <>
      <p>현재 주사위 숫자 : {num}</p>
      <button
        onClick={() => {
          const newNum = getRandomDiceNumber();
          setNum(newNum);
        }}
      >
        다시 굴리기
      </button>
    </>
  );
}
