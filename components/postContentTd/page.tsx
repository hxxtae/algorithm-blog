import styles from './page.module.css';

interface PostContentTdProps {
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentTd({ customProps }: PostContentTdProps) {
  return (
    <>
      <td id={customProps.children} className={styles.post_td}>
        {customProps.children}
      </td>
    </>
  )
}