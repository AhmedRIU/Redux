import "./App.css";
import { useAppDispatch, useAppSelector } from "./Redux/hooks/Hooks";
import { increment, decrement } from "./Redux/slices/counter";

function App() {
  const count = useAppSelector((state) => state.counter.value); // Access the `value` property
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
