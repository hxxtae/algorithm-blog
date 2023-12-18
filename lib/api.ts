import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';
import matter from 'gray-matter';

import { ContentType, ContentsType } from '@/interfaces/contents';
import PostType from '@/interfaces/post';
import type { PathKinds } from '@/interfaces/paths';

const dateFormat = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.getTime();
}

// -----------------
// Posts
// -----------------
export const getAllPost = async (fetch_kind: PathKinds): Promise<ContentType[]> => {
  const data = await getAllData(fetch_kind);
  const contents: ContentsType[] = await Promise.all(data.map(item => getContentData(item.download_url)));
  const posts: ContentType[] = contents.map(obj => getPostBySlug(obj.content));
  posts.sort((a, b) => dateFormat(b.date) - dateFormat(a.date));

  return posts;
}

// -----------------
// Post
// -----------------
export const getPostBySlug = (contentData: string): ContentType => {
  contentData = contentData.toString();
  const { data, content } = matter(contentData);
  
  return {
    ...data,
    content
  }
}

// -----------------
// Set HTML of content
// -----------------
export const getHTML = async (data: string) => {
  const str = await remark()
    .use(remarkGfm)
    .use(html)
    .process(data);
  return str.toString();
}

// -----------------
// Datas
// - type: json
// -----------------
export const getAllData = async (fetch_kind: PathKinds) => {
  try {
    const data: PostType[] = await fetch(`https://api.github.com/repos/hxxtae/algorithm/contents/blog/${fetch_kind}`)
      .then(response => response.json());
    
    return data;

  } catch (err: any) {
    throw new Error(`fetch error [getAllData]: ${err}`);
  }
}

// -----------------
// Data (content)
// - type: text
// -----------------
export const getContentData = async (file_URL: string): Promise<{ content: string }> => {
  try {
    const data: string = await fetch(file_URL)
      .then(response => response.text());
  
    return {
      content: data
    };
  } catch (err: any) {
    throw new Error(`fetch error [getContentData]: ${err}`);
  }
}