import { Metadata } from 'next';
import Image from 'next/image';

import { getAllPost } from '@/lib/api';
import { ContentType } from '@/interfaces/contents';
import { dateFormatToYMD } from '@/utils/format';
import { PostListProps } from '../page';
import type { PathKinds } from '@/interfaces/paths';
import metadata from '@/utils/metadata';
import styles from './page.module.css';
import PostMarkDown from '@/components/markdown/page';
import Header from '@/components/header/page';

interface IPostItem {
  params: {
    slugs: PathKinds;
    slug: string;
  }
}

export default async function PostItem({ params }: IPostItem) {
  const data = await getPropsData(params.slugs, params.slug);

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

// NOTE: generateMetadata
// DESC: 정적 메타데이터를 정의하려면 layout.tsx 또는 page.tsx 파일에서 메타데이터 개체를 내보냅니다.
export const generateMetadata = async ({ params }: IPostItem): Promise<Metadata> => {
  return metadata({
    title: `Algorithm | ${decodeURIComponent(params.slug)}`,
    description: `문제 제목: ${decodeURIComponent(params.slug)}, ${decodeURIComponent(params.slugs)}`,
    path: `/${params.slugs}/${params.slug}`
  });
}