import React, { useState } from 'react';

export function Count() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(1);
  console.log(Count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Count;