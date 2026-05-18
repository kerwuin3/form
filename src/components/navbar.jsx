import styles from '../styles/navbar.module.scss';
import Link from 'next/link';
import { TbDeviceDesktopCode } from "react-icons/tb";
import { Lobster } from 'next/font/google';

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`${styles.logoText} ${lobster.className}`}>        
        <TbDeviceDesktopCode />
        &lt;kwn<span>Dev </span>/&gt;
      </div>
      <div className={styles.btns}>
        <button className={styles.btnLogin}>
          <Link href='/login'>
            Sign In
          </Link>
        </button>
        <button className={styles.btnSignup}>
          <Link href='/signup'>
            Sign Up
          </Link>
        </button>
      </div>
    </header>
  );
}