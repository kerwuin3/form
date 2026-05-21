//import { FaRegUser, FaLock } from 'react-icons/fa';
import { LuUser, LuLockKeyhole, LuLogIn  } from "react-icons/lu";
import styles from './auth.module.scss';
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

export default function Auth() {
  return (
    <div className={styles.container}>
      <Image className={styles.img} src='/assets/secure-login.svg' alt="login illustration" width={500} height={500} priority/>
      <div className={styles.wrapper}>
        <div className={styles.formHeader}>
          <div className={styles.title}>
            <h1 className={`${styles.titleLogin} ${lobster.className} antialiased`}>Sign In</h1>
          </div>
        </div>
        <div className={styles.inputWraper}>
          <form>
            <div className={styles.inputBox}>
              <input
                type='text'
                id='user'
                className={`${styles.inputField} ${montserrat.className} antialiased`}
                autoComplete='off'
                required
              />
              <label htmlFor='user' className={`${styles.label} ${montserrat.className} antialiased`}>
                Username
              </label>
              <LuUser className={styles.icon} />
            </div>
            <div className={styles.inputBox}>
              <input
                type='password'
                id='pass'
                className={`${styles.inputField} ${montserrat.className} antialiased`}
                autoComplete='off'
                required
              />
              <label htmlFor='pass' className={`${styles.label} ${montserrat.className} antialiased`}>
                Password
              </label>
              <LuLockKeyhole className={styles.icon} />
            </div>
            <div className={`${styles.forgotLink} ${montserrat.className} antialiased`}>
            <Link href='/forgot'>
              Forgot Password?
            </Link>
          </div>
            <div className={styles.inputBox}>
              <button type='submit' className={`${styles.btnSubmit} ${montserrat.className} antialiased`}>
                Sign In
                <LuLogIn className={styles.iconSub} />
              </button>
            </div>
            </form>          
            <div className={styles.socialWrapper}>
            <div className={`${montserrat.className} ${styles.dividerText}`}>
              <span>OR</span>
            </div>
              <SocialIcon />
            </div>
            <p className={`${styles.toggleText} ${montserrat.className} antialiased`}>
            Don&apos;t have an account?
            <Link href='signup' className={`${styles.toggleLink} ${montserrat.className} antialiased`}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}