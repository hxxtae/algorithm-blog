import { Metadata } from 'next';
import Image from 'next/image';

import { getAllPost } from '@/lib/api';
import { ContentType } from '@/interfaces/contents';
import { dateFormatToYMD } from '@/utils/format';
import styles from './page.module.css';
import PostMarkDown from '@/components/markdown/page';
import Header from '@/components/header/page';
import { PostListProps } from '../page';
import type { PathKinds } from '@/interfaces/paths';

export const metadata: Metadata = {
  title: 'Algorithm : ',
  description: '알고리즘 풀이 및 해설을 위한 블로그 입니다.'
}

interface IPostItem {
  params: {
    slugs: PathKinds;
    slug: string;
  }
}

export default async function PostItem({ params }: IPostItem) {
  const data = await getPropsData(params.slugs, params.slug);
  metadata.title = `Algorithm : ${decodeURIComponent(params.slug)}`;

  return (
    <>
      <Header />
      <div className={styles.markdown_wrapper}>
        <h1 className={styles.content_header}>{data?.title}</h1>
        <span className={styles.content_date}>{dateFormatToYMD(data?.date)}</span>
        <div className={styles.content_info}>
          <ul className={styles.content_info_algorithm}>
            {[...data?.algorithm].map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <span className={styles.content_info_any}>{data?.level}</span>
        </div>
        {/* <Image
          className={styles.content_img}
          src="/assets/main.jpeg"
          alt="post top image"
          width={680}
          height={458}
          priority
        /> */}
        <PostMarkDown content={data?.content} />
      </div>
    </>
  )
}

// NOTE: getStaticProps (not export)
async function getPropsData(slugs: PathKinds, slug: string): Promise<ContentType> {
  const posts = await getAllPost(decodeURIComponent(slugs) as PathKinds);
  const thisPost = posts.find(post => decodeURIComponent(slug) === post.title);
  if (!thisPost) return {};

  return thisPost;
}

// NOTE: getStaticPaths
export async function generateStaticParams({ params }: PostListProps) {
  // console.log('params')
  const posts = await getAllPost(params.slugs);

  return posts.map(post => ({
    slugs: post.category,
    slug: post.title
  }));
}
