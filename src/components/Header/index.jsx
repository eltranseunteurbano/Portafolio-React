import React from 'react';
import './index.scss'
import { NavLink, Link } from 'react-router-dom';
import * as routes from '../../assets/js/routes';

import Logo from '../../assets/icons/Logo/';
import MenuIcon from '../../assets/icons/MenuIcon';


const Header = () => {
  return(
    <header className='header'>
      <Link to={routes.INDEX} className='header__logo'><Logo /></Link>

      <nav className='header__nav'>
        <MenuIcon />
        <NavLink className='header__nav__item' to={routes.SOBREMI} activeClassName='header__nav__item-selected'>Sobre mí</NavLink>
        <NavLink className='header__nav__item' to={routes.PORTAFOLIO} activeClassName='header__nav__item-selected'>Portafolio</NavLink>
        <NavLink className='header__nav__item' to={routes.CONTACTO} activeClassName='header__nav__item-selected'>Contacto</NavLink>
      </nav>
    </header>
  )
}

export default Header;