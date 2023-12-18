import styles from './page.module.css';

interface PostContentH3Props {
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentH3({ customProps }: PostContentH3Props) {
  return (
    <>
      <h3 className={styles.post_h3}>
        {customProps.children}
      </h3>
    </>
  )
}