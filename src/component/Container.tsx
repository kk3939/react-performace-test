import React, { useState } from "react";
import Child from "./Child";

const Container: React.FC = () => {
  console.log("render container!");
  const [containerNum, setContanerNum] = useState<number>(0);
  const [childNum, setChildNum] = useState<number>(0);

  return (
    <>
      <button onClick={() => setContanerNum(containerNum + 1)}>
        countup App count
      </button>
      <button onClick={() => setChildNum(childNum + 1)}>
        countup Child count
      </button>
      <p>App: {containerNum}</p>
      <Child num={childNum} />
    </>
  );
};

export default Container;
