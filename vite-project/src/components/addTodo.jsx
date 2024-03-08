import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <h2>Add Todo component</h2>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddTodo;
