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
    return <PostContentP customProps={{...props}} />
  },
  h1({ ...props }) {
    return <PostContentH1 customProps={{...props}} />
  },
  h2({ ...props }) {
    return <PostContentH2 customProps={{...props}} />
  },
  h3({ ...props }) {
    return <PostContentH3 customProps={{...props}} />
  },
  hr({ ...props }) {
    return <PostContentHr customProps={{...props}} />
  },
  table({ ...props }) {
    return <PostContentTable customProps={{...props}} />
  },
  th({ ...props }) {
    return <PostContentTh customProps={{...props}} />
  },
  td({ ...props }) {
    return <PostContentTd customProps={{...props}} />
  },
  code({ ...props }) {
    const match = /language-(\w+)/.exec(props.className) as RegExpExecArray;
    return <PostContentCode match={match} customProps={{...props}} />
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