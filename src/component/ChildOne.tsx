import React from "react";

type Props = {
  num: number;
  alertChildNum: () => void;
};

// numが変化あるか検知して、レンダリングするか判断。
// Propsの変化があればそのコンポーネントだけレンダリングする。
// eslint-disable-next-line react/display-name
const ChildOne: React.FC<Props> = React.memo(({ num, alertChildNum }) => {
  console.log("render child component");
  return <p onClick={() => alertChildNum()}>Child: {num}</p>;
});

export default ChildOne;
