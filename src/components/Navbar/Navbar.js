import { useState, useEffect } from "react";
import { motion, useScroll, useVelocity } from "framer-motion";
import styles from "../../App.module.scss";

export default function Navbar() {
  const slideDistance = 80;
  const threshold = 200;

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isInView, setIsInView] = useState(true);

  useEffect(
    () =>
      scrollVelocity.onChange((latest) => {
        if (latest > 0) {
          setIsScrollingBack(false);
          return;
        }
        if (latest < -threshold) {
          setIsScrollingBack(true);
          return;
        }
      }),
    []
  );

  useEffect(() => scrollY.onChange((latest) => setIsAtTop(latest <= 0)), []);

  useEffect(() => setIsInView(isScrollingBack || isAtTop), [
    isScrollingBack,
    isAtTop
  ]);

  return (
    <motion.div
      className={styles.header}
      animate={{ y: isInView ? 0 : -slideDistance }}
      transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
      style={{ height: slideDistance }}
    >
      В старый особняк на <a href="https://yandex.ru/maps/-/CDfoNAkG" className={styles.link} target="_blank" rel="noreferrer">Кожевнической 16с4</a> обычно
      заезжали гости со всего света. Зная секретный код <a href="tel:+79992102222" className={styles.link}>+7 999 2102222</a>, распрастранявшийся через местных пьяниц, каждый из них попадал в тайную команту…
    </motion.div>
  );
}
