const weight = 80;

export default function weightReducer(state = weight, action) {
  if (action.type === '증가') {
    return state + 1;
  } else {
    return state - 1;
  }
}
