import {FaFacebook, FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/socialIcon.module.scss';

export default function SocialIcon({ icon, link }) {
  return (
    <div className={styles.socialIcons}>
      <a href="#facebook" aria-label="Facebook">
        <FaFacebook />
      </a>
      <a href="#google" aria-label="Google">
        <FaGoogle />
      </a>
      <a href="#linkedin" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="#github" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
  );
}