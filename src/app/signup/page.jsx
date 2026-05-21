import { LuUser, LuMail, LuLockKeyhole, LuLogIn } from 'react-icons/lu';
import styles from './signup.module.scss';
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

export default function Signup() {
  return (
    <div className={styles.container}>
      <Image className={styles.img} src='./assets/hire.svg' alt="register illustration" width={500} height={500} priority/>
      <div className={styles.wrapper}>
        <div className={styles.formHeader}>
          <div className={styles.title}>
            <h1 className={`${styles.titleLogin} ${lobster.className} antialiased`}>
              Sign Up
            </h1>
          </div>
        </div>
        <div className={styles.inputWraper}>
          <form>
            <div className={styles.inputBox}>
              <input
                className={`${styles.inputField} ${montserrat.className} antialiased`}
                type='text'
                id='user'
                required
              />
              <label htmlFor='user' className={`${styles.label} ${montserrat.className} antialiased`}>
                Username
              </label>
              <LuUser className={styles.icon} />
            </div>
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
              <input
                className={`${styles.inputField} ${montserrat.className} antialiased`}
                type='password'
                id='pass'
                required
              />
              <label htmlFor='pass' className={`${styles.label} ${montserrat.className} antialiased`}>
                Password
              </label>
              <LuLockKeyhole className={styles.icon} />
            </div>
            <div className={styles.inputBox}>
              <button type='submit' className={`${styles.btnSubmit} ${montserrat.className} antialiased`}>
                Sign Up
                <LuLogIn className={styles.iconSub} />
              </button>
            </div>
          </form>
        </div>
        <p className={`${styles.toggleText} ${montserrat.className} antialiased`}>
          Already have an account?
          <Link href='auth' className={`${styles.toggleLink} ${montserrat.className} antialiased`}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}