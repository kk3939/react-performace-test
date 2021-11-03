import React from "react";
import styled from "styled-components";
import ContainerOne from "./component/ContainerOne";
import ContainerTwo from "./component/ContainerTwo";

const App: React.FC = () => {
  return (
    <div className="App">
      <Wrapper>
        <h2>Only React.Memo</h2>
        <ContainerOne />
        <Spacer />
        <h2>React.memo and useCallback</h2>
        <ContainerTwo />
      </Wrapper>
    </div>
  );
};

const Spacer = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  margin: 50px auto;
  text-align: center;
`;

export default App;
