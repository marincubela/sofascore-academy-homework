import React from "react";
import { BsX } from "react-icons/bs";
import { ListContext } from "./Main";

export function TodoItem(props) {
  const { removeTodo } = React.useContext(ListContext);

  const remove = () => {
    removeTodo(props.item);
  };

  const [decoration, setDecoration] = React.useState(
    props.item.completed ? "line-through" : "none"
  );

  const completed = () => {
    props.item.completed = !props.item.completed;
    setDecoration(props.item.completed ? "line-through" : "none");
  };

  return (
    <div className="flexContainer todoItem">
      <span
        className="itemTask"
        onClick={completed}
        style={{
          textDecoration: decoration,
        }}
      >
        {props.item.text}
      </span>
      <span onClick={remove}>
        <BsX color="#f9826c" size="32" />
      </span>
    </div>
  );
}
