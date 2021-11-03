import React, { useState } from "react";
import ChildOne from "./ChildOne";

const ContainerOne: React.FC = () => {
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
      <ChildOne num={childNum} />
    </>
  );
};

export default ContainerOne;
