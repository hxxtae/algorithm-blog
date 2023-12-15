import styles from './page.module.css';

interface PostContentH2Props {
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentH2({ customProps }: PostContentH2Props) {
  return (
    <>
      <h2 id={customProps.children} className={styles.post_h2}>
        {customProps.children}
      </h2>
      {/* <div className={styles.post_line}></div> */}
    </>
  )
}