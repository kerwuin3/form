import styles from './home.module.scss';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { TbDeviceDesktopCode } from "react-icons/tb";
import { Lobster, Montserrat } from 'next/font/google';
import Image from 'next/image';

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
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
      <div className={styles.heroBgWrapper}>
        <Image
          className={styles.heroBg}
          src='/assets/code-thinking.svg'
          alt='background'
          width={500}
          height={500}
          priority
        />
      </div>
      <div className={styles.heroContent}>
        <h1 className={`${styles.heroTitle} ${lobster.className} antialiased`}>
          Welcome to!
        </h1>        
        <TbDeviceDesktopCode className={`${styles.heroIcon}`} />
        <h2 className={`${styles.logo} ${lobster.className} antialiased`}>
          &lt;kwn<span>Dev </span>/&gt;
        </h2>
        <p className={`${montserrat.className} antialiased`}>Where ideas become code.</p>
        <p className={`${montserrat.className} antialiased`}>Log in to your account or create a new one to get started.</p>
      </div>
    </div>
    <Footer />
    </>
  );
}