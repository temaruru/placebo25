import styles from './Content.module.scss';
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {motion, useAnimation} from "framer-motion";

import photo from "../../assets/images/photo-1.png";
import print from "../../assets/images/print-1.png";

function Content() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
      <div className={styles.paragraph}>
        <p className={styles.text}>
          Атмосферный бордель на Олдрич-стрит был домом для мафиози, чиновников, коллекционеров, богачей Гонконга и
          гостей мегаполиса. Особняк изобиловал опиумом, дурманящими напитками и роскошными азиатками — лучшими в
          городе.
        </p>
        <p className={styles.text}>
          В конце пути, из-за ужесточения законов, смены власти и преображения социальной среды, как и многие
          проститутки, Roche — просветлела. С этого самого момента всю свою энергию, открывшиеся знания и время она
          посвятила изучению культуры высокой кухни.
        </p>
      </div>
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
          Бурное прошлое наложило на ее дом-ресторан некоторые особенности: она всегда не против как следует выпить и
          станцевать с гостями под лучшую эклектичную музыку со всего света.
        </p>
      </div>
    </>
  );
}

export default Content;
