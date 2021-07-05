import React, { useState, useEffect, useRef } from "react";
import { FiPlus } from "react-icons/fi";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const focus = useRef(null);

  const addButton = <FiPlus />;

  useEffect(() => {
    focus.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Let's get to work..."
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={focus}
      />
      <button className="todo-button">{addButton}</button>
    </form>
  );
}

export default TodoForm;
