import React from "react";
import { Filter } from "./Filters";
import { ListContext } from "./Main";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { filter } = React.useContext(ListContext);

  const filterFunction = (e) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return e.completed;
    } else {
      return !e.completed;
    }
  };

  return (
    <ListContext.Consumer>
      {({ todos }) => {
        return (
          <div
            style={{
              display: todos.length ? "block" : "none",
            }}
          >
            <h1
              style={{
                color: "black",
                margin: "10px",
              }}
            >
              TODO LIST
            </h1>
            <Filter />
            {todos.filter(filterFunction).map((e, index) => {
              return (
                <>
                  <TodoItem item={e}></TodoItem>
                  <hr />
                </>
              );
            })}
          </div>
        );
      }}
    </ListContext.Consumer>
  );
}
