import styles from './page.module.css'
import Header from '@/components/header/page'
import MainBanner from '@/components/mainBanner/page'
import MainPosts from '@/components/mainPosts/page'

export default function Home() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <MainBanner />
        <MainPosts />
      </main>
    </>
  )
}


