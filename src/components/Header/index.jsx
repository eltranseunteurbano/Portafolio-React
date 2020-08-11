import React from 'react';
import './index.scss';
import './menuResponsive.scss';

import { NavLink, Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import * as routes from '../../assets/js/routes';

import Logo from '../../assets/icons/Logo/';
import MenuIcon from '../../assets/icons/MenuIcon/index';
import Redes from '../../assets/icons/Redes';

const Header = () => {

  const [scrollY, setScrollY] = React.useState(0);
  const [showResponsive, setShowResponsive] = React.useState(false);

  let history = useHistory();
  
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

  const onNavigationResponsive = ( route ) => {
    setShowResponsive(false)
    history.push(route)
  }

  return(
    <header className='header' style={scrollY >= 90 ? {boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'} : {}}>
      <section className='header__wp'>
        <Link to={routes.INDEX} className='header__logo'><Logo active = {showResponsive} /></Link>

        <nav className='header__nav'>
          <div className='header__nav__item' onClick={ () => {setShowResponsive(!showResponsive)}}>
            <MenuIcon active={showResponsive} />
          </div>
          <NavLink className='header__nav__item' to={routes.SOBREMI} activeClassName='header__nav__item-selected'>Sobre mí</NavLink>
          <NavLink className='header__nav__item' to={routes.PORTAFOLIO} activeClassName='header__nav__item-selected'>Portafolio</NavLink>
          <NavLink className='header__nav__item' to={routes.CONTACTO} activeClassName='header__nav__item-selected'>Contacto</NavLink>
        </nav>

        <Modal
          isOpen={showResponsive}
          onRequestClose={() => setShowResponsive(false)}
          className='MenuResponsive__body'
          overlayClassName='MenuResponsive appear'
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
        >
          <div />
          <nav className='MenuResponsive__nav'>
            <button className='MenuResponsive__nav__item' onClick={() => onNavigationResponsive(routes.SOBREMI)}>Sobre mí</button>
            <button className='MenuResponsive__nav__item' onClick={() => onNavigationResponsive(routes.PORTAFOLIO)}>Portafolio</button>
            <button className='MenuResponsive__nav__item' onClick={() => onNavigationResponsive(routes.CONTACTO)}>Contacto</button>
          </nav>

          <footer className='MenuResponsive__footer'>
            <div className='MenuResponsive__footer__iconos'>
              <Redes round={true} name='Correo'/>
              <Redes round={true} name='LinkedIn'/>
              <Redes round={true} name='Behance'/>
              <Redes round={true} name='Github'/>
              <Redes round={true} name='Fotografia'/>
              <Redes round={true} name='Dribbble'/>
              <Redes round={true} name='Instagram'/>
            </div>
            <a className='MenuResponsive__footer__city' href='https://goo.gl/maps/UXQi7J6odSW5h7JB9' target='_blank' rel='noopener noreferrer' >Cali - Colombia</a>
            <h1 className='MenuResponsive__footer__title'>JAIME BURBANO</h1>
          </footer>
        </Modal>
      </section>
    </header>
  )
}

export default Header;