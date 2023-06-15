import React, { useState } from "react";

const Content = () => {
  /*Function using random display */
  function changeName() {
    const names = ["Nandy", "Dony", "Vimal"];
    const n = Math.floor(Math.random() * 3);
    return names[n];
  }
  const [count, setCount] = useState(0);
  function incFunc() {
    setCount((count) => {
      return count + 1;
    });
  }
  function decFun() {
    setCount((count) => {
      return count - 1;
    });
  }

  return (
    <body>
      <h1>Learning React Hooks </h1>
      <p>How many topics completed , {changeName()} ?</p>
      <button onClick={decFun}> - </button>
      <span>{count}</span>
      <button onClick={incFunc}> + </button>
    </body>
  );
};
export default Content;
