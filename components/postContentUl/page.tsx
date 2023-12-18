import styles from './page.module.css';

interface PostContentUlProps {
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentUl({ customProps }: PostContentUlProps) {
  return (
    <>
      <ul className={styles.post_ul}>
        {customProps.children}
      </ul>
    </>
  )
}