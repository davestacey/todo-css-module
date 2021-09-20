import styles from "./summary-styles.module.scss";

const Summary = ({ completed, total }) => {
  const summaryMessage = () => {
    if (completed > 0 && completed !== total) {
      return (
        <>
          Completed tasks: <b>{completed}</b> of <b>{total}</b>
        </>
      );
    } else if (completed === total) {
      return (
        <>
          <b>All done!</b> 🎉
        </>
      );
    } else {
      return (
        <>
          Total tasks: <b>{total}</b>
        </>
      );
    }
  };

  return (
    <>{total > 0 && <div className={styles.summary}>{summaryMessage()}</div>}</>
  );
};

export default Summary;
