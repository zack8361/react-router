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
  buyList: ['닌텐도', '자동차'],
  todoListCount: 3,
};

let count = initState.todoList.length;
initState['nextID'] = count;

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

// action.id 컴포넌트에서 받아온 값
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        // todoList: state.todoList.concat({
        //   id: action.payload.id,
        //   text: action.payload.text,
        //   done: false,
        // }),
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],
        nextID: action.payload.id + 1,
      };
    case DONE:
      // 컴포넌트에서 넘어온 아이디.
      console.log(action.id);
      return {
        ...state,
        todoList: state.todoList.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
