import styles from "./notification-styles.module.scss";

function Notification({ message }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Notification;
