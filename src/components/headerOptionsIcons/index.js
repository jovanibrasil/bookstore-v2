import './style.css';

import ProfileIcon from '../../images/perfil.svg'
import ShoppingCartIcon from '../../images/sacola.svg'
const headerOptionsIcons = [ProfileIcon, ShoppingCartIcon];

export default function HeaderOptionsIcons() {
  return (
    <ul className='header-options-icons-container'>
      {headerOptionsIcons.map(optionIcon => (
        <img src={optionIcon} className='header-option-icon'></img>
      ))}
    </ul>
  );
}