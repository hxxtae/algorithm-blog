import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './page.module.css';

interface PostContentCodeProps {
  match: RegExpExecArray;
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentCode({ match, customProps }: PostContentCodeProps) {
  return (
    <>
      {!match ? (
        <code className={styles.small_code}>
          {String(customProps.children).replace(/\n$/, '')}
        </code>
      ) : (
        <div className={styles.syntax_code_wrapper}>
            <SyntaxHighlighter style={atomOneDark} language={match[1]} PreTag="section" {...customProps} customStyle={{ padding: "12px 16px" }}>
            {String(customProps.children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      )}
    </>
  )
}