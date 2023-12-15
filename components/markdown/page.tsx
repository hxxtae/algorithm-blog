import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import PostContentH2 from '../postContentH2/page'
import PostContentH3 from '../postContentH3/page'
import PostContentCode from '../postContentCode/page'
import PostContentTable from '../postContentTable/page'
import PostContentTd from '../postContentTd/page'
import PostContentTh from '../postContentTh/page'
import PostContentP from '../postContentP/page'
import PostContentH1 from '../postContentH1/page'
import PostContentHr from '../postContentHr/page'

const custom = {
  p({ ...props }) {
    const customProps = { ...props };
    return <PostContentP customProps={customProps} />
  },
  h1({ ...props }) {
    const customProps = { ...props };
    return <PostContentH1 customProps={customProps} />
  },
  h2({ ...props }) {
    const customProps = { ...props };
    return <PostContentH2 customProps={customProps} />
  },
  h3({ ...props }) {
    const customProps = { ...props };
    return <PostContentH3 customProps={customProps} />
  },
  hr({ ...props }) {
    const customProps = { ...props };
    return <PostContentHr customProps={customProps} />
  },
  table({ ...props }) {
    const customProps = { ...props };
    return <PostContentTable customProps={customProps} />
  },
  th({ ...props }) {
    const customProps = { ...props };
    return <PostContentTh customProps={customProps} />
  },
  td({ ...props }) {
    const customProps = { ...props };
    return <PostContentTd customProps={customProps} />
  },
  code({ ...props }) {
    const customProps = { ...props };
    const match = /language-(\w+)/.exec(props.className) as RegExpExecArray;
    return <PostContentCode match={match} customProps={customProps} />
  }
}

interface PostMarkDownProps {
  content: string
}

export default function PostMarkDown({ content }: PostMarkDownProps) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={custom} >{content}</Markdown>
  )
}