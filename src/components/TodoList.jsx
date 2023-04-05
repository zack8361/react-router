import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const inputEl = useRef();
  return (
    <div>
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          dispatch(
            create({ id: todoList.length, text: inputEl.current.value })
          );
          inputEl.current.value = '';
        }}
      >
        추가
      </button>
      <ul>
        {todoList.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </div>
  );
}
