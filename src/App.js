import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inc, setInc] = useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{inc}</div>
      <button onClick={() => setInc(inc + 1)}>Increase</button>
      <button onClick={() => setInc(inc - 12)} disabled={inc === 0}>
        Decrease
      </button>
      <button onClick={() => setInc(0)} disabled={inc === 0}>
        Reset
      </button>
    </div>
  );
}
