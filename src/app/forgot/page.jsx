import styles from './forgot.module.scss';
import { LuMail, LuLogIn } from 'react-icons/lu';
import { Lobster, Montserrat } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function Forgot() {
  return (
    <div className={styles.container}>
      <Image className={styles.img} src='./assets/forgot-password.svg' alt="forgot password illustration" width={500} height={500} priority/>
      <div className={styles.wrapper}>
        <div className={styles.formHeader}>
          <div className={styles.title}>
            <h1 className={`${styles.titleLogin} ${lobster.className} antialiased`}>
              Recover Access
            </h1>
          </div>
        </div>
        <div className={styles.inputWraper}>
          <form>            
            <div className={styles.inputBox}>
              <input
                className={`${styles.inputField} ${montserrat.className} antialiased`}
                type='text'
                id='email'
                required
              />
              <label htmlFor='email' className={`${styles.label} ${montserrat.className} antialiased`}>
                Email
              </label>
              <LuMail className={styles.icon} />
            </div>
            <div className={styles.inputBox}>
              <button type='submit' className={`${styles.btnSubmit} ${montserrat.className} antialiased`}>
                Send Reset Link
                <LuLogIn className={styles.iconSub} />
              </button>
            </div>
          </form>
        </div>
        <p className={`${styles.toggleText} ${montserrat.className} antialiased`}>
          Return to 
          <Link href='auth' className={`${styles.toggleLink} ${montserrat.className} antialiased`}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}