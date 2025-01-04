import './style.css';
import logo from '../../images/logo.svg'

export default function Logo() {
  return (
    <div className='logo'>
      <img className='logo-image' src={logo} alt='Logo da Alurabooks'></img>
      <p>Alura Books</p>
    </div>
  );
}