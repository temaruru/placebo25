import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Madame from "./components/Madame/Madame";
import Content from "./components/Content/Content";
import Content2 from "./components/Content2/Content2";
import Footer from "./components/Footer/Footer";
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.page}>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <section className={styles.madame}>
          <Logo />
          <Madame />
        </section>
        <section className={styles.content}>
          <Content />
          <Content2 />
        </section>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
