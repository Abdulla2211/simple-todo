import styles from './FullPageSpinner.module.scss';

function FullPageSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <span className={styles.loader}></span>
      </div>
    </div>
  );
}

export default FullPageSpinner;
