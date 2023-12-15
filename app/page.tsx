import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.css'
import Header from '@/components/header/page'

export const metadata: Metadata = {
  title: 'Algorithm',
  description: '알고리즘 풀이 및 해설을 위한 블로그 입니다.'
}

export default function Home() {

  return (
    <>
      <Header />
      <main className={styles.main}>

        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
      </main>
    </>
  )
}


