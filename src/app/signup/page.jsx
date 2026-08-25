'use client'

import { LuUser, LuMail, LuLockKeyhole, LuLogIn, LuEye, LuEyeClosed } from 'react-icons/lu';
import styles from './signup.module.scss';
import { Lobster, Montserrat } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const requirements = [
  ['8 Chars', 'Minimum 8 characters'],
  ['A-Z', 'At least one uppercase letter'],
  ['a-z', 'At least one lowercase letter'],
  ['0-9', 'At least one number'],
  ['!@#$', 'At least one special character (!@#$%^&*)'],
]

export default function Signup() {
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)

  const checks = [
    value.length >= 8,
    /[A-Z]/.test(value),
    /[a-z]/.test(value),
    /\d/.test(value),
    /[^A-Za-z0-9]/.test(value),
  ]

  const strength = value.length >= 8 ? 'Strong' : value.length >= 4 ? 'Medium' : 'Weak'

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


            <div className={`${styles.inputBox} ${styles[strength.toLowerCase()]}`}>

              <input
                className={`${styles.inputField} ${montserrat.className} antialiased`}
                id='pass'
                type={visible ? 'text' : 'password'}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                aria-describedby="password-strength password-requirements"
                required
              />
              <label htmlFor='pass' className={`${styles.label} ${montserrat.className} antialiased`}>
                Password
              </label>
              {value.length === 0 ? (
                <LuLockKeyhole className={styles.icon} />
              ) : (
                <div                  
                  className={styles.icon}
                  onClick={() => setVisible((current) => !current)}
                  aria-label={visible ? 'Show' : 'Hide'}
                >
                  {visible ? <LuEye /> : <LuEyeClosed />}
                </div>
              )}

            </div>

            <div className={`${styles.strengthRow} ${styles[strength.toLowerCase()]} ${montserrat.className}`} id="password-strength">
              <span>Password Strength</span>
              <strong>{strength}</strong>
            </div>
            <div className={`${styles.progress} ${styles[strength.toLowerCase()]}`} aria-hidden="true"><span style={{ width: `${Math.min(value.length * 12.5, 100)}%` }} />
            </div>

            <div className={`${styles.requirements} ${montserrat.className}`} id="password-requirements" aria-label="Requisitos de contraseña">
              {requirements.map(([label, description], index) => (
                <span className={checks[index] ? styles.valid : styles.invalid} key={label} title={description}>
                  <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" /><path d="m4.8 8 2.1 2.1 4.3-4.4" /></svg>
                  {label}
                </span>
              ))}
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