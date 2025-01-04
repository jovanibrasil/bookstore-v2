import './style.css'

import Logo from '../logo'
import HeaderOptions from '../headerOptions';
import HeaderOptionsIcons from '../headerOptionsIcons';

export default function Header() {
  return (
    <header className='app-header'>
      <Logo />
      <HeaderOptions />
      <HeaderOptionsIcons />
    </header>
  );
}