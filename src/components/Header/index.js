import './style.css'

import Logo from '../Logo'
import HeaderOptions from '../HeaderOptions';
import HeaderOptionsIcons from '../HeaderOptionsIcons';

export default function Header() {
  return (
    <header className='app-header'>
      <Logo />
      <HeaderOptions />
      <HeaderOptionsIcons />
    </header>
  );
}