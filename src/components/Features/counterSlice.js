const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, counter: state.counter + 1 };
    case "counter/decrement":
      return { ...state, counter: state.counter - 1 };
    case "counter/increase":
      return { ...state, counter: state.counter + 10 };
    case "counter/toggle":
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

export const decrement = () => {
  return {
    type: "counter/decrement",
  };
};

export const increment = () => {
  return {
    type: "counter/increment",
  };
};

export const increase = () => {
  return {
    type: "counter/increase",
  };
};

export const toggle = (show) => {
  return {
    type: "counter/toggle",
    payload: show,
  };
};

export default counterReducer;
