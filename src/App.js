import Header from './components/Header';
import styled from 'styled-components';
import Search from './components/Search';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(97.45deg, #002F52 35.49%, #326589 165.37%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
    </AppContainer>
  );
}

export default App;
