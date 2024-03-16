import { createStore, combineReducers } from "redux";
import counterReducer from "./components/Features/counterSlice";
import authReducer from "./components/Features/authSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
