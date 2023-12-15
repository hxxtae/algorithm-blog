import styles from './page.module.css';

interface PostContentH1Props {
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentH1({ customProps }: PostContentH1Props) {
  return (
    <>
      <h1 id={customProps.children} className={styles.post_h1}>
        {customProps.children}
      </h1>
      <div className={styles.post_line}></div>
    </>
  )
}