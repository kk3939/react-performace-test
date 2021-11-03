import React from "react";
type Props = {
  num: number;
  alertChildNum: () => void;
};

// eslint-disable-next-line react/display-name
const ChildTwo: React.FC<Props> = React.memo(({ num, alertChildNum }) => {
  console.log("render child component");
  return <p onClick={alertChildNum}>Child: {num}</p>;
});

export default ChildTwo;
