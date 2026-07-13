// import logo from './logo.svg';
import Header from './Components/Header';
import Home from './Components/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #a7b7f6;
  min-height: 100vh;`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />

    </AppContainer>
  );
}

export default App;
