import styles from './page.module.css';

interface PostContentPProps {
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentP({ customProps }: PostContentPProps) {
  return (
    <>
      <p id={customProps.children} className={styles.post_p}>
        {customProps.children}
      </p>
    </>
  )
}