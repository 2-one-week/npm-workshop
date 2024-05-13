import classnames from "classnames/bind";
import { getRandomDiceNumber } from "./utils";
import styles from "./dice.module.scss";
import { Button } from "./button";

const cx = classnames.bind(styles);

export function Dice() {
  const ssrNumber = getRandomDiceNumber();

  return (
    <>
      <Button ssrNumber={ssrNumber} />
      <section className={cx("diceSection", "diceAnimation")}>
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <div className={cx("dice")}>
              {Array.from({ length: index + 1 }).map(() => (
                <span />
              ))}
            </div>
          );
        })}
      </section>
    </>
  );
}
