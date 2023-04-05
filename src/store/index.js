import { combineReducers } from 'redux';
import todo from './modules/todo';
import weightReducer from './modules/weight';
import mbti from './modules/mbti';

// 총 2개의 스토어를 관리하고있따.
export default combineReducers({
  todo,
  mbti,
});
