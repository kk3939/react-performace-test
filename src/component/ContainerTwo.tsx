import React, { useState } from "react";
import ChildTwo from "./ChildTwo";

const ContainerTwo: React.FC = () => {
  console.log("render container!");
  const [containerNum, setContanerNum] = useState<number>(0);
  const [childNum, setChildNum] = useState<number>(0);

  const alertChildNum = (): void => {
    alert(childNum);
  };

  return (
    <>
      <button onClick={() => setContanerNum(containerNum + 1)}>
        countup App count
      </button>
      <button onClick={() => setChildNum(childNum + 1)}>
        countup Child count
      </button>
      <p>App: {containerNum}</p>
      <ChildTwo num={childNum} alertChildNum={() => alertChildNum()} />
    </>
  );
};

export default ContainerTwo;
