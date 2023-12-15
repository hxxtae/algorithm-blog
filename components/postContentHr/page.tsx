import styles from './page.module.css';

interface PostContentHrProps {
  customProps: {
    [x: string]: any;
  }
}

export default function PostContentHr({ customProps }: PostContentHrProps) {
  return (
    <>
      <hr id={customProps.children} className={styles.post_hr} />
    </>
  )
}