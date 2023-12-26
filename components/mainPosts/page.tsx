import { getAllPost, getHTML } from '@/lib/api';
import { dateFormatToYMD, getTextOfBetweenTag } from '@/utils/format';
import styles from './page.module.css';
import Link from 'next/link';

export default async function MainPosts() {
  const posts = await getPropsData(5);
  const postsOfHtml = await Promise.all(posts.map(post => getHTML(post.content)));
  const descList = postsOfHtml.map(content =>
    getTextOfBetweenTag(content)
      .join(' ')
      .slice(0, 170));

  return (
    <section className={styles.content_posts}>
      <h1 className={styles.content_title}>최근 게시물</h1>
      <ul className={styles.content_list}>
        {posts.map((post, idx) =>
          <li key={idx}>
            <Link href={`/${post.category}/${post.title}`}>
              <span className={styles.post_date}>{dateFormatToYMD(post.date)}</span>
              <div className={styles.post_box}>
                <h2 className={styles.post_header}>{post.title}</h2>
                <p className={styles.post_desc}>{descList[idx]}</p>
              </div>
            </Link>
          </li>)}
      </ul>
    </section>
  )
}

async function getPropsData(showCount: number = 3) {
  const bogPost = await getAllPost('boj');
  const programmerPost = await getAllPost('programmers');

  const recentPost = [...bogPost.slice(0, showCount), ...programmerPost.slice(0, showCount)];
  recentPost.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return recentPost.slice(0, showCount);
}
