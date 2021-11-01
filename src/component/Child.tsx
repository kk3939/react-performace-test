import React from "react";

type Props = {
  num: number;
};

// numが変化あるか検知して、レンダリングするか判断。
// Propsの変化があればそのコンポーネントだけレンダリングする。
// eslint-disable-next-line react/display-name
const Child: React.FC<Props> = React.memo(({ num }) => {
  console.log("render child component");
  return <p>Child: {num}</p>;
});

export default Child;
