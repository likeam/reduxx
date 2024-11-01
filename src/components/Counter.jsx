import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Counter;
