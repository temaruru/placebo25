import styles from './Footer.module.scss';
import TopUp from "../TopUp/TopUp";

function App() {
  return (
    <>
      <TopUp />
      <div className={styles.footer}>
        Основное меню представлено актуальным <br/> и авторским comfort-food
      </div>
      <div className={styles.actions}>
        <a href="https://t.me/temaruru" target="_blank" className={styles.link} rel="noreferrer">Telegram</a>
        <a href="https://web.whatsapp.com/" target="_blank" className={styles.link} rel="noreferrer">Whatsapp</a>
      </div>
    </>
  );
}

export default App;
