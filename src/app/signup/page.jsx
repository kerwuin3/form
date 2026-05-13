import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import styles from '../../styles/signup.module.scss';
import Link from 'next/link';

export default function Signup() {  
  return (
    <div className={styles.formContainer}>
      <form className={styles.form-box}>
        <h1>Registration</h1>

        <div className={styles.inputBox}>
          <input type="text" placeholder="Username" required />
          <FaUser className={styles.icon} />
        </div>

        <div className={styles.inputBox}>
          <input type="email" placeholder="Email" required />
          <FaEnvelope className={styles.icon} />
        </div>

        <div className={styles.inputBox}>
          <input type="password" placeholder="Password" required />
          <FaLock className={styles.icon} />
        </div>

        <button type="submit" className={styles.btn}>Register</button>

        <p className={styles.toggleText}>
          Already have an account?
          <Link href="/login" className={styles.toggleLink}>
            Log in
          </Link>          
        </p>
      </form>
    </div>
  );
}