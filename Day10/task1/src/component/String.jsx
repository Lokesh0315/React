import React, { useState } from "react";

const String = () => {
  const [count, setCount] = useState("Lokesh");

  const show = () => {
    setCount("Developer");
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={show}>Click Me</button>
    </div>
  );
};

export default String;