import React, { useCallback, useState } from "react";
import ChildTwo from "./ChildTwo";

const ContainerTwo: React.FC = () => {
  console.log("render container!");
  const [containerNum, setContanerNum] = useState<number>(0);
  const [childNum, setChildNum] = useState<number>(0);

  const alertChildNum = useCallback(() => {
    alert("click");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <button onClick={() => setContanerNum(containerNum + 1)}>
        countup App count
      </button>
      <button onClick={() => setChildNum(childNum + 1)}>
        countup Child count
      </button>
      <p>App: {containerNum}</p>
      <ChildTwo num={childNum} alertChildNum={alertChildNum} />
    </>
  );
};

export default ContainerTwo;
