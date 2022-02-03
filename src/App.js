import Header from "./components/Header/Header";
import ContentContainer from "./components/Body/ContentContainer";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  background-color: #000000;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <ContentContainer />
    </AppContainer>
  );
}

export default App;
