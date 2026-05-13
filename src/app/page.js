import styles from '../styles/home.module.scss';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Welcome to Back!
      </h1>
    </div>
    <Footer />
    </>
  );
}