const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth/login":
      return { ...state, isAuth: true };
    case "auth/logout":
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

export const login = () => {
  return {
    type: "auth/login",
  };
};

export const logout = () => {
  return {
    type: "auth/logout",
  };
};

export default authReducer;
