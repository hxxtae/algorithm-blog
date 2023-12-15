import styles from './page.module.css';

interface PostContentTableProps {
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentTable({ customProps }: PostContentTableProps) {
  return (
    <>
      <table id={customProps.children} className={styles.post_table}>
        {customProps.children}
      </table>
    </>
  )
}