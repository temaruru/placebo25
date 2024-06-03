import styles from './Content2.module.scss';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

import photo from "../../assets/images/photo-2.png";
import print from "../../assets/images/print-2.png";

function Content2() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const variantsSecond = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <>
      <div className={styles.decoration}>
        <motion.img
          ref={ref}
          className={styles.photo}
          src={photo}
          initial="hidden"
          animate={controls}
          variants={variants}
        />
        <motion.img
          ref={ref}
          className={styles.print}
          src={print}
          initial="hidden"
          animate={controls}
          variants={variantsSecond}
        />
      </div>
      <div className={styles.paragraph}>
        <p className={styles.text}>
          Основное меню представлено актуальным и авторским comfort-food, построенным на захватывающих вкусовых сочетаниях соусов и высококачественных овощах, мясе и морепродуктах.
        </p>
      </div>
    </>
  );
}

export default Content2;
