import styles from './styles.module.scss';

export function SubTitleBar(props: { title: string }) {
  return (
    <div className={styles.subTitleContainer}>
      <h1>{props.title}</h1>
    </div>
  )
}