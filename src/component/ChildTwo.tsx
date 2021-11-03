import React from "react";
type Props = {
  num: number;
  alertChildNum: () => void;
};

const ChildTwo: React.FC<Props> = ({ num, alertChildNum }) => {
  console.log("render child component");
  return <p onClick={() => alertChildNum()}>Child: {num}</p>;
};

export default ChildTwo;
