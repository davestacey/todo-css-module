import Button from "./../../components/Button/Button";
import { Plus } from "./../../components/icons/";
import styles from "./todo-styles.module.scss";

const AddItem = ({ newTodoValue, handleInputOnChange, handleAddTask }) => {
  return (
    <form className={styles["add-task"]}>
      <input
        type="text"
        className={styles["add-task__input"]}
        placeholder="Add new task"
        value={newTodoValue}
        onChange={handleInputOnChange}
        autoFocus
      />
      <Button
        type="submit"
        className={styles["add-task__button"]}
        disabled={!newTodoValue}
        onClick={handleAddTask}
        title="Add Task"
      >
        <Plus />
      </Button>
    </form>
  );
};

export default AddItem;
