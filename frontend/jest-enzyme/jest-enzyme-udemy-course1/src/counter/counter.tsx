import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
    }
  };

  return (
    <div>
      <div>
        Value of counter is <span data-test="counter-value">{count}</span>
      </div>
      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button data-test="decrement-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export { Counter };
