import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { INITIAL_LIST_ITEMS } from "./../../data/tasks-list";

import AddItem from "./add-item";
import ToDoItem from "./todo-item";

import Notification from "../Notification/Notification";
import Summary from "../Summary/Summary";

import styles from "./todo-styles.module.scss";

function ToDoList() {
  // * get tasks from localStorage
  const localTasks = localStorage.getItem("myTasks");
  const LOCAL_TASKS_LIST = JSON.parse(localTasks);

  // use tasks list from local srorage or initial one
  const TASKS_LIST = LOCAL_TASKS_LIST || INITIAL_LIST_ITEMS;

  const [todoList, setTodoList] = useState(TASKS_LIST);
  const [newTodoValue, setTodoValue] = useState("");
  const [editMode, setEditMode] = useState(false);

  const [notificationMessage, setNotificationMessage] = useState("");

  const incompletedTasks = todoList.filter((item) => item.checked === false);
  const completedTasks = todoList
    .filter((item) => item.checked === true)
    .reverse();

  const totalTasksNum = todoList.length;
  const completedTasksNum = completedTasks.length;

  //
  // ---------
  // Type task
  // ---------
  const handleInputOnChange = (event) => {
    const inputValue = event.target.value;
    setTodoValue(inputValue);
  };

  //
  // --------
  // Add task
  // --------
  const handleAddTask = (event) => {
    event.preventDefault();

    // block from adding empty todo
    if (newTodoValue === "") {
      return;
    }

    setTodoList((prevTodoList) => {
      const udpatedTodoList = [
        {
          id: uuidv4(),
          text: newTodoValue,
          checked: false
        },
        ...prevTodoList
      ];

      console.log(udpatedTodoList);

      // * save to localStorage
      saveData(udpatedTodoList);

      return udpatedTodoList;
    });

    // clear input value
    setTodoValue("");

    setNotificationMessage(`Task «${newTodoValue}» was added`);
  };

  //
  // -----------
  // Remove task
  // -----------
  const handleRemove = (todoListItem) => {
    const udpatedTodoList = todoList.filter(
      (item) => item.id !== todoListItem.id
    );

    console.log(udpatedTodoList);
    setTodoList(udpatedTodoList);

    // * save to localStorage
    saveData(udpatedTodoList);

    setNotificationMessage(`Task «${todoListItem.text}» was removed`);
  };

  //
  // --------------
  // Handle checked
  // --------------
  const handleChecked = (todoListItem, event) => {
    const isItemChecked = event.target.checked;
    const currentDate = new Date().toLocaleString();

    const updatedTodoListItem = {
      ...todoListItem,
      checked: isItemChecked,
      dateCompleted: isItemChecked ? currentDate : ""
    };

    setTodoList((prevTodoList) => {
      const currentIndex = todoList.findIndex(
        (item) => item.id === todoListItem.id
      );

      const udpatedTodoList = [...prevTodoList];
      udpatedTodoList.splice(currentIndex, 1, updatedTodoListItem);

      // * save to localStorage
      saveData(udpatedTodoList);

      console.log(udpatedTodoList);

      setNotificationMessage(
        `Task «${todoListItem.text}» marked as ${
          isItemChecked ? "done" : "undone"
        }`
      );

      return udpatedTodoList;
    });
  };

  //
  // ---------
  // Edit task
  // ---------
  const handleEditTask = (todoListItem, event) => {
    // TBA
  };

  //
  // ---------
  // MOVE TASK
  // ---------
  const arraymove = (array, fromIndex, toIndex) => {
    var element = array[fromIndex];
    array.splice(fromIndex, 1);
    array.splice(toIndex, 0, element);
  };

  // meh
  const handleMoveUp = (todoListItem) => {
    arraymove(incompletedTasks, todoListItem.index, todoListItem.index + 1);
    // * save to localStorage
    // saveData(udpatedTodoList);
  };

  // meh
  const handleMoveDown = (todoListItem) => {
    arraymove(incompletedTasks, todoListItem.index, todoListItem.index - 1);
  };

  //
  // -------------------------
  // Show notification message
  // -------------------------
  useEffect(() => {
    const notificationTimeout = setTimeout(() => {
      setNotificationMessage("");
    }, 4000);
    return () => {
      clearTimeout(notificationTimeout);
    };
  }, [notificationMessage]);

  //
  // -------------------------
  // Save data to LocalStorage
  // -------------------------
  const saveData = (array) => {
    localStorage.setItem("myTasks", JSON.stringify(array));
  };

  return (
    <>
      <div className={styles.container}>
        <AddItem
          newTodoValue={newTodoValue}
          handleInputOnChange={handleInputOnChange}
          handleAddTask={handleAddTask}
        />

        <ul className={styles["tasks-list"]}>
          {incompletedTasks.map((todoListItem, key) => (
            <ToDoItem
              key={key}
              editMode={editMode}
              todoListItem={todoListItem}
              handleChecked={handleChecked}
              handleEditTask={handleEditTask}
              handleRemove={handleRemove}
              handleMoveUp={handleMoveUp}
              handleMoveDown={handleMoveDown}
            />
          ))}
        </ul>
        <ul className={styles["tasks-list"]}>
          {completedTasks.map((todoListItem, key) => (
            <ToDoItem
              key={key}
              todoListItem={todoListItem}
              handleChecked={handleChecked}
              handleRemove={handleRemove}
            />
          ))}
        </ul>

        <Summary completed={completedTasksNum} total={totalTasksNum} />
      </div>

      {notificationMessage && <Notification message={notificationMessage} />}
    </>
  );
}

export default ToDoList;
