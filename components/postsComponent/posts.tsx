import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { dateFormatToYMD, getTextOfBetweenTag } from '@/utils/format';
import { ContentType } from '@/interfaces/contents';
import { getHTML } from '@/lib/api';
import styles from './posts.module.css';

interface PostsComponentProps {
  data: ContentType[];
  category: string;
}

export default async function PostsComponent({ data, category }: PostsComponentProps) {
  const htmlContents = await Promise.all(data.map((item) => getHTML(item.content)));
  const descList = htmlContents.map(content =>
    getTextOfBetweenTag(content)
      .join(' ')
      .slice(0, 150));

  return (
    <section className={styles.posts}>
      <h1 className={styles.posts_header}>{category === 'boj' ? 'Baekjoon Online Judge' : 'Programmers'}</h1>
      {/* <p className={styles.hr}></p> */}
      <ul className={styles.post_list}>
        {data?.map((post, idx) => (
          <li key={idx}>
            <Link href={`/${post.category}/${post.title}`}>
              <span className={styles.post_date}>{dateFormatToYMD(post.date)}</span>
              <div className={styles.post_box}>
                <h2 className={styles.post_header}>{post.title}</h2>
                <p className={styles.post_desc}>{descList[idx]}</p>
              </div>
            </Link> 
            <div className={styles.post_info_box}>
              {post.level && <span>{post.level}</span>}
              {[...post.algorithm].map((algo, algoIdx) =>
                (<span key={algoIdx}>{algo}</span>))}
            </div>
            {post.label &&
              <div className={styles.post_bookmark}>
                <FontAwesomeIcon icon={faBookmark} size='1x' />
              </div>}
          </li>
        ))}
      </ul>
    </section>
  )
}
