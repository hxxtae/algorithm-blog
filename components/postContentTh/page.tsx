import styles from './page.module.css';

interface PostContentThProps {
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentTh({ customProps }: PostContentThProps) {
  return (
    <>
      <th className={styles.post_th}>
        {customProps.children}
      </th>
    </>
  )
}