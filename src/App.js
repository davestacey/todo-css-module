import "./styles.scss";
import ToDoList from "./components/todo/todo-list";

export default function App() {
  return (
    <div className="app">
      <h1 className="app-title">Tasks for today</h1>
      <ToDoList />
    </div>
  );
}
