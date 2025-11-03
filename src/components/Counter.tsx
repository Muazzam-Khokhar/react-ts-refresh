import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
