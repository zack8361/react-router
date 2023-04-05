const initState = {
  todoList: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

// 가방을 만들어 함수 던지기
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

// 완료 함수
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        todoList: state.todoList.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return console.log('DONE 호출되었음');
    default:
      return state;
  }
}
