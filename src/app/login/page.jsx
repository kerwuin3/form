import { FaUser, FaLock } from 'react-icons/fa';
import styles from '../../styles/login.module.scss';
import Link from 'next/link';
import SocialIcon from '../../components/socialIcon';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.formBox}>
          <h1>Login</h1>
          
          <div className={styles.inputBox}>
            <input 
              type='text'
              id='username'
              className={styles.inputField}
              placeholder=''
              required
            />
            <label htmlFor="username" className={styles.floatingLabel}>
              UserName
            </label>
            <FaUser className={styles.icon} />
          </div>

          <div className={styles.inputBox}>
            <input
              type='password'
              id='password'
              className={styles.inputField}
              placeholder=''
              required
            />
            <label htmlFor="password" className={styles.floatingLabel}>
              Password
            </label>
            <FaLock className={styles.icon} />
          </div>

          <div className={styles.forgotLink}>
            <Link href="/forgot">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className={styles.btn}>Login</button>

          <p>or login with social platforms</p>

          <SocialIcon />

          <p className={styles.toggleText}>
            Don&apos;t have an account?
            <Link href="/signup" className={styles.toggleLink}>
              Register here
            </Link>          
          </p>
        </form>
      </div>
    </div>    
  );
}