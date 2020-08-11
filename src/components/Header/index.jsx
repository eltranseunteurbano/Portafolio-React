import React from 'react';
import './index.scss'
import { NavLink, Link } from 'react-router-dom';
import * as routes from '../../assets/js/routes';

import Logo from '../../assets/icons/Logo/';
import MenuIcon from '../../assets/icons/MenuIcon/index';

const Header = () => {

  const [scrollY, setScrollY] = React.useState(0);
  const [showResponsive, setShowResponsive] = React.useState(false);
  
  //Ancho | Width
  React.useEffect( () => {
    function onElementWidthChange(elm, callback){
      var lastWidth = elm.clientWidth, newWidth;
      (function run(){
          newWidth = elm.clientWidth;
          if( lastWidth !== newWidth )
              callback(newWidth)
          lastWidth = newWidth
          if( elm.onElementWidthChangeTimer )
          clearTimeout(elm.onElementWidthChangeTimer)
          elm.onElementWidthChangeTimer = setTimeout(run, 200)
      })()
      }
      onElementWidthChange(document.body, function(width){
          if(width >= 600) {
            setShowResponsive(false);
          }
      });
  }, [])

  //Scroll
  React.useEffect( () => {
    window.addEventListener("scroll", function ( event ){
        var scrollY = this.scrollY;
        setScrollY(scrollY);
    });
  }, [])
  
  return(
    <header className='header' style={scrollY >= 90 ? {boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'} : {}}>
      <section className='header__wp'>
        <Link to={routes.INDEX} className='header__logo'><Logo /></Link>

        <nav className='header__nav'>
          <div className='header__nav__item' onClick={ () => {setShowResponsive(!showResponsive)}}>
            <MenuIcon active={showResponsive} />
          </div>
          <NavLink className='header__nav__item' to={routes.SOBREMI} activeClassName='header__nav__item-selected'>Sobre mí</NavLink>
          <NavLink className='header__nav__item' to={routes.PORTAFOLIO} activeClassName='header__nav__item-selected'>Portafolio</NavLink>
          <NavLink className='header__nav__item' to={routes.CONTACTO} activeClassName='header__nav__item-selected'>Contacto</NavLink>
        </nav>
      </section>
    </header>
  )
}

export default Header;