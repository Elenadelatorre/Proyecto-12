import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/form'>Concurso</NavLink>
          </li>
          <li>
            <NavLink to='/store'>Tienda</NavLink>
          </li>
          <li><NavLink to='/favs'>Favoritos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
