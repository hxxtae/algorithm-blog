import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

import styles from './creater.module.css';

export default function CreaterComponent() {
  return (
    <section className={styles.creater}>
      <div className={styles.creater_wrapper}>
        <div className={styles.creater_sticky} id='creater_sticky'>
          <div className={styles.creater_box} id='creater_height'>
            <div className={styles.creater_box_top}>
              <div className={styles.creater_img_box}>
                <Image src='/assets/heetae.jpg' alt="creater image" width={100} height={100}></Image>
              </div>
              <span className={styles.creater_name}>Hxxtae</span>
              <p className={styles.creater_desc}>
                Heetae Kim, web front-end developer.
                @Hackathons & project collaborations are always welcome.
                Email inquiry -&gt; fkdlxmfkdl@gmail.com.
              </p>
              <div className={styles.creater_link}>
                <Link href='https://heetae.dev' target='_blank'>
                  <FontAwesomeIcon icon={faLink} size='1x' />
                  <span>heetae.me</span>
                </Link>
                <Link href='https://github.com/hxxtae' target='_blank'>
                  <FontAwesomeIcon icon={faLink} size='1x' />
                  <span>github.com</span>
                </Link>
              </div>
            </div>
            <div className={styles.creater_box_bottom}>
              Product by hxxtae.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}