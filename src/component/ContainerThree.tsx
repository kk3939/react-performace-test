import React, { useMemo, useState } from "react";

const ContainerThree: React.FC = () => {
  const [num, setNum] = useState<number>(0);
  const [doubleCount, setDoubleNum] = useState<number>(0);

  // 時間がかかる処理
  const double = (count: number): number => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };

  // usememoを使うと値が変化したかどうかを検知して、再計算するか検証してくれる
  // const doubledNum = double(doubleCount);
  const doubledNum: number = useMemo(() => double(doubleCount), [doubleCount]);

  return (
    <>
      <button onClick={() => setNum(num + 1)}>increment</button>
      <button onClick={() => setDoubleNum(doubleCount + 1)}>
        double(slow)
      </button>
      <p>num: {num}</p>
      <p>doubleNum: {doubledNum}</p>
    </>
  );
};

export default ContainerThree;
