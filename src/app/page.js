import styles from './home.module.scss';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { TbDeviceDesktopCode } from "react-icons/tb";
import { Lobster, Montserrat } from 'next/font/google';

const lobster = Lobster({ 
  subsets: ['latin'], 
  weight: '400' 
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={`${styles.heroTitle} ${lobster.className}`}>
          Welcome to!
        </h1>        
        <TbDeviceDesktopCode className={`${styles.heroIcon}`} />
        <h2 className={`${styles.logo} ${lobster.className}`}>&lt;kwn<span>Dev </span>/&gt;</h2>
        <p className={`${montserrat.className}`}>Where ideas become code.</p>
        <p className={`${montserrat.className}`}>Log in to your account or create a new one to get started.</p>
      </div>
    </div>
    <Footer />
    </>
  );
}