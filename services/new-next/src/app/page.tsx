import Image from "next/image";
import styles from "./page.module.css";
import { Dice } from "@oneweek.lee/secure-dice";
import "@oneweek.lee/secure-dice/style.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Dice />
    </main>
  );
}
