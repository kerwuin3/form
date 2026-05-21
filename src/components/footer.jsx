import styles from '../styles/footer.module.scss';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function Footer() {
  return (
    <footer className={styles.footer}>        
      <p className={`${styles.copyright} ${montserrat.className} antialiased`}>
        Copyright © 2026 Form kwnDev, All Rights Reserved.
      </p>
    </footer>
  );
}