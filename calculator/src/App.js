import React from 'react';
import styled from 'styled-components';
import TabMenu from './component/Tab';
import InputForm from './component/InputForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  border: 2px solid gray;
  border-radius: 10px;
  padding: 40px;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <InputForm />
        <TabMenu />
      </Wrapper>
    </Container>
  );
}

export default App;
