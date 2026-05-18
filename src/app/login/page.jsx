//import { FaRegUser, FaLock } from 'react-icons/fa';
import { LuUser, LuLockKeyhole, LuLogIn  } from "react-icons/lu";
import styles from './login.module.scss';
import Link from 'next/link';
import SocialIcon from '../../components/socialIcon';
import Image from 'next/image';
import { Lobster, Montserrat } from 'next/font/google';

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function Login() {
  return (
    <div className={styles.container}>
      <Image className={styles.img} src='/assets/secure-login.svg' alt="login illustration" width={500} height={500} priority/>
      <div className={styles.wrapper}>
        <div className={styles.formHeader}>
          <div className={styles.title}>
            <h1 className={`${styles.titleLogin} ${lobster.className}`}>Sign In</h1>
          </div>
        </div>
        <div className={styles.inputWraper}>
          <form>
            <div className={styles.inputBox}>
              <input
                type='text'
                id='user'
                className={`${styles.inputField} ${montserrat.className}`}
                autoComplete='off'
                required
              />
              <label htmlFor='user' className={`${styles.label} ${montserrat.className}`}>
                Username
              </label>
              <LuUser className={styles.icon} />
            </div>
            <div className={styles.inputBox}>
              <input
                type='password'
                id='pass'
                className={`${styles.inputField} ${montserrat.className}`}
                autoComplete='off'
                required
              />
              <label htmlFor='pass' className={`${styles.label} ${montserrat.className}`}>
                Password
              </label>
              <LuLockKeyhole className={styles.icon} />
            </div>
            <div className={`${styles.forgotLink} ${montserrat.className}`}>
            <Link href='/forgot'>
              Forgot Password?
            </Link>
          </div>
            <div className={styles.inputBox}>
              <button type='submit' className={`${styles.btnSubmit} ${montserrat.className}`}>
                Sign In
                <LuLogIn className={styles.iconSub} />
              </button>
            </div>
            <div className={styles.socialWrapper}>
            <p className={`${montserrat.className} ${styles.socialText}`}>
              or login with social platforms
            </p>
              <SocialIcon />
            </div>
            <p className={`${styles.toggleText} ${montserrat.className}`}>
            Don&apos;t have an account?
            <Link href='signup' className={`${styles.toggleLink} ${montserrat.className}`}>
              Register
            </Link>
          </p>
          </form>          
        </div>
      </div>
    </div>
  );
}