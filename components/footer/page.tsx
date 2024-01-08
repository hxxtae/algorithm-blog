import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

import styles from './page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="https://github.com/hxxtae/algorithm-blog" target='_blank'>
          <FontAwesomeIcon icon={faGithubSquare} />
        </Link>
        <Link href="https://www.linkedin.com/in/kimheetae/" target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
      <span className={styles.license}>Copyright © 2023 HeetaeKim</span>
    </footer>
  )
}