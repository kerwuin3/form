import styles from '../styles/navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoText}>
        &lt;kwn<span>Dev </span>/&gt;
      </div>
      <div>
        <button className={styles.btnLogin}>
          <Link href='/login'>
            Login
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