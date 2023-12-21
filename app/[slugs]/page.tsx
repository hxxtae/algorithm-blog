import { ContentType } from '@/interfaces/contents';
import { getAllPost } from '@/lib/api';
import type { PathKinds } from '@/interfaces/paths';
import styles from './page.module.css';
import Header from '@/components/header/page';
import PostsComponent from '../../components/postsComponent/posts';
import CreaterComponent from '../../components/createrComponent/creater';

export interface PostListProps {
  params: {
    slugs: PathKinds;
  }
}

export default async function PostList({ params }: PostListProps) {
  const data = await getPropsData(params.slugs);

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
const getPropsData = async (slugs: PathKinds): Promise<ContentType[]> => {
  const posts = await getAllPost(slugs);
  return posts;
}

// NOTE: getStaticPaths
// export async function generateStaticParams() {
//   const paths = [{ slugs: 'boj' }, { slugs: 'programmers' }];
//   return paths;
// }