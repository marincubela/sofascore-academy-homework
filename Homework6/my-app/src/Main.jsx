import React from "react";
import { useIsVisible } from "./IsVisible";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

const defaultFilter = (e) => {
  return true;
};

export const ListContext = React.createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  filterFunction: defaultFilter,
});

export function Main() {
  const [todos, setTodos] = React.useState([]);
  const [filter, setFilter] = React.useState("all");
  const [isVisibleInput, changeVisibleInput] = useIsVisible("hidden");
  const [isVisibleAdd, changeVisibleAdd] = useIsVisible("visible");

  const changeAddInput = () => {
    changeVisibleInput();
    changeVisibleAdd();
  };

  return (
    <ListContext.Provider
      value={{
        todos,
        addTodo: (text) => {
          const todosCopy = [...todos];
          todosCopy.push({ text, completed: false });
          const t = [...new Set(todosCopy)];
          setTodos(t);
        },
        removeTodo: (item) => {
          const todosCopy = [...todos];
          todosCopy.splice(todosCopy.indexOf(item), 1);
          setTodos(todosCopy);
        },
        filter,
        setFilter,
      }}
    >
      <div className="main">
        <h2 className={`container ${isVisibleAdd}`} onClick={changeAddInput}>
          + ADD TODO
        </h2>
        <TodoInput isVisible={isVisibleInput} changeVisible={changeAddInput} />
        <TodoList />
      </div>
    </ListContext.Provider>
  );
}
