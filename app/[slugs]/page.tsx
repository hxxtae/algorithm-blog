import { Metadata } from 'next';

import { ContentType } from '@/interfaces/contents';
import { getAllPost } from '@/lib/api';
import styles from './page.module.css';
import Header from '@/components/header/page';
import PostsComponent from '../../components/postsComponent/posts';
import CreaterComponent from '../../components/createrComponent/creater';

export const metadata: Metadata = {
  title: 'Algorithm',
  description: '알고리즘 풀이 및 해설을 위한 블로그 입니다.'
}

export interface PostListProps {
  params: {
    slugs: string;
  }
}

export default async function PostList({ params }: PostListProps) {
  const data = await getPropsData(params.slugs);
  metadata.title = `Algorithm : ${decodeURIComponent(params.slugs)}`
  metadata.description = `알고리즘(${decodeURIComponent(params.slugs)}) 풀이 및 해설을 정리하여 기록합니다.`

  return (
    <>
      <Header />
      <main className={styles.main}>
        <PostsComponent data={data} category={decodeURIComponent(params.slugs)} />
        <CreaterComponent />
      </main>
    </>
  )
}

// NOTE: getStaticProps (not export)
const getPropsData = async (slugs: string): Promise<ContentType[]> => {
  const posts = await getAllPost(slugs);
  return posts;
}

// NOTE: getStaticPaths
// export async function generateStaticParams() {
//   const paths = [{ slugs: 'boj' }, { slugs: 'programmers' }];
//   return paths;
// }