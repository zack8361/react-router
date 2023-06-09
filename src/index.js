import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Provider
import { Provider } from 'react-redux';
// 브라우저 라우터 설정
import { BrowserRouter } from 'react-router-dom';
// createStore
import { configureStore } from '@reduxjs/toolkit';
// combine reducer 를 담고 있는 index.js 를 받는다.
import rootReducer from './store/index.js';

// todoStore 선언ㅊ
const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore({ reducer: rootReducer }, reduxDevTool);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
