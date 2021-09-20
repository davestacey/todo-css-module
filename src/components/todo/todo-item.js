import Button from "./../../components/Button/Button";
import { Trash, ArrowUp, ArrowDown, Pencil } from "./../../components/icons/";
import styles from "./todo-styles.module.scss";

const TodoItem = ({
  todoListItem,
  handleChecked,
  handleRemove,
  handleEditTask,
  editMode = false,
  handleMoveUp,
  handleMoveDown
}) => {
  return (
    <li className={styles.task} key={todoListItem.id}>
      <label className={styles["task__label"]}>
        <input
          type="checkbox"
          onChange={(event) => handleChecked(todoListItem, event)}
          className={styles["task__check"]}
          defaultChecked={todoListItem.checked}
        />

        {editMode ? (
          <input value={todoListItem.text} type="text" />
        ) : (
          <span className={styles["task__text"]}>{todoListItem.text}</span>
        )}

        {todoListItem.dateCompleted && (
          <div className={styles["task__date-completed"]}>
            Done: {todoListItem.dateCompleted}
          </div>
        )}
      </label>

      <div className={styles.task__actions}>
        {!todoListItem.checked && (
          <>
            <Button
              title="Move task up"
              onClick={() => handleMoveUp(todoListItem)}
            >
              <ArrowUp />
            </Button>
            <Button
              title="Move task down"
              onClick={() => handleMoveDown(todoListItem)}
            >
              <ArrowDown />
            </Button>
            <Button
              title="Edit task"
              onClick={() => handleEditTask(todoListItem)}
            >
              <Pencil />
            </Button>
          </>
        )}
        <Button title="Remove task" onClick={() => handleRemove(todoListItem)}>
          <Trash />
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
