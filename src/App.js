import './App.css';
import Logo from './components/logo'
import HeaderOptions from './components/headerOptions';
import HeaderOptionsIcons from './components/headerOptionsIcons';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <Logo />
        <HeaderOptions />
        <HeaderOptionsIcons />
      </header>
    </div>
  );
}

export default App;
