import { useState } from 'react';

function TodoInput(props) {
  const { AddTodoHandler, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder='Enter todo here...'
      />
      <button
        onClick={() => {
          AddTodoHandler(todoValue);
          setTodoValue('');
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
