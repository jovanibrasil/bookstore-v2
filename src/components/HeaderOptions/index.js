import './style.css';

const headerOptions = ['Categorias', 'Minha estante', 'Favoritos'];

export default function HeaderOptions() {
  return (
    <ul className='header-options-container'>
      {headerOptions.map(option => (
        <li className='header-option'>{option}</li>
      ))}
    </ul>
  );
}