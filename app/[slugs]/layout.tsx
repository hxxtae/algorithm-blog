import { Metadata } from 'next';

import { PostListProps } from './page';
import metadata from '@/utils/metadata';
import styles from './page.module.css';

interface BojLayoutProps {
  children: React.ReactNode;
}

export default function PostListLayout({ children }: BojLayoutProps) {
  return (
    <section className={styles.layout_section}>
      {children}
    </section>
  )
}

// NOTE: getStaticPaths
// NOTE: page.tsx 뿐만 아니라 layout.tsx 에서도 함수 사용이 가능히다.
export async function generateStaticParams() {
  const paths = [{ slugs: 'boj' }, { slugs: 'programmers' }];
  return paths;
}
// Example: ./[slugs]/[slug]/page.tsx
// URL:     ./[slugs]/[slug]
// Multiple Dynamic Segments in a Route 를 적용 시
// [slugs]페이지의 page.tsx에서 'generateStaticParams' 함수를 적용하면
// [slug]페이지의 page.tsx에서 [slugs]의 라우터 값에 접근할 수 없습니다.

// 이유: [slug]의 page.tsx 페이지 이동 시 [slugs]의 page.tsx는 완전히 폐기되어 버리고,
// [slug]의 page.tsx에 접근하기 때문이다.

// 해결: [slug]의 page.tsx에서 [slugs] 라우터의 값 즉, 상위(부모) params에 접근할 수 있도록 하기 위해
// 하위(자식) [slug]의 page.tsx에서도 접근할 수 있는 layout.tsx에서 'generateStaticParams' 를 사용하여
// [slugs]의 params의 값을 넘겨준다.

// NOTE: generateMetadata
// DESC: 정적 메타데이터를 정의하려면 layout.tsx 또는 page.tsx 파일에서 메타데이터 개체를 내보냅니다.
export const generateMetadata = async ({ params }: PostListProps): Promise<Metadata> => {
  return metadata({
    title: `Algorithm | ${decodeURIComponent(params.slugs)}`,
    description: `알고리즘 ${decodeURIComponent(params.slugs)} 풀이 및 해설을 정리하여 기록합니다.`,
    path: `/${params.slugs}`
  });
}