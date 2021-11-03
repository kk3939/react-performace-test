import React from "react";
import ContainerOne from "./component/ContainerOne";
import ContainerTwo from "./component/ContainerTwo";

const App: React.FC = () => {
  return (
    <div className="App">
      <ContainerOne />
      <ContainerTwo />
    </div>
  );
};

export default App;
