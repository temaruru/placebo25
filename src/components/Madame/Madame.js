import styles from './Madame.module.scss';
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

import madame from "../../assets/images/madame.png";
import print from "../../assets/images/madame-print.svg";
import brush from "../../assets/images/madame-brush.svg";

function Madame() {
  const x = useMotionValue(400);
  const y = useMotionValue(400);

  const rotateX = useTransform(y, [0, 800], [15, -15]);
  const rotateY = useTransform(x, [0, 800], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const text = 'The guest house of the mysterious Asian woman in the heart of the Eurasian world'
  const words = text.split(" ");

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          placeItems: "center",
          placeContent: "center",
          perspective: 400
        }}
        onMouseMove={handleMouse}
        className={styles.decoration}
      >
        <motion.img
          style={{
            rotateX,
            rotateY
          }}
          className={styles.image}
          src={madame}
        />
        <motion.img
          className={styles.brush}
          initial="visible"
          src={brush}
          animate={{scale: 1.1}}
          transition={{ease: "anticipate", duration: 2, delay: 0.3}}
        />
        <img src={print} alt="" className={styles.print}/>
        <span className={styles.description}>Madame Roche</span>
      </div>
      <motion.h3
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className={styles.title}>
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "5px" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.h3>
    </>
  );
}

export default Madame;
