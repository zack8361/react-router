import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList).filter(
    (el) => el.done === false
  );
  const nextID = useSelector((state) => state.todo.nextID);
  const dispatch = useDispatch();
  const inputEl = useRef();
  return (
    <div>
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          dispatch(create({ id: nextID, text: inputEl.current.value }));
          inputEl.current.value = '';
        }}
      >
        추가
      </button>
      <ul>
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button onClick={() => dispatch(done(el.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
