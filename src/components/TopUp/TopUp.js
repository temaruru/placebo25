import Logo from "../Logo/Logo";
import styles from './TopUp.module.scss';

function TopUp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Logo
      onClick={scrollToTop}
      className={styles.logo}
    />
  );
}

export default TopUp;
