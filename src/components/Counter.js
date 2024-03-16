import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increase,
  increment,
  toggle,
} from "./Features/counterSlice";

const Counter = () => {
  // const counter = 0;
  // const show = true;

  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector((state) => state.counter);

  const handleToggleCounter = () => {
    dispatch(toggle());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleIncrementBy10 = () => {
    dispatch(increase());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementBy10}>Increase by 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
