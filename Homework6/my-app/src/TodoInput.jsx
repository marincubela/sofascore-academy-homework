import React from "react";
import { BsX, BsCheck } from "react-icons/bs";
import { ListContext } from "./Main";

export function TodoInput(props) {
  const ref = React.useRef(null);
  const { addTodo } = React.useContext(ListContext);
  const [task, setTask] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.length) {
      addTodo(task);
      setTask("");
      ref.current.value = "";
      props.changeVisible();
    }
  };

  const declineAdd = (e) => {
    e.preventDefault();
    setTask("");
    ref.current.value = "";
    props.changeVisible();
  };

  return (
    <form
      className={`flexContainer container ${props.isVisible}`}
      onSubmit={handleSubmit}
    >
      <input
        className="todoInput"
        type="text"
        ref={ref}
        placeholder="Enter Task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>
        <BsCheck color={!!task ? "#f9826c" : "#464646"} size="32" />
      </button>
      <button onClick={declineAdd}>
        <BsX color="#f9826c" size="32" />
      </button>
    </form>
  );
}
