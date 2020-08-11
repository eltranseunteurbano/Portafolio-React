import React from 'react';
import './index.scss';

import Redes from '../../assets/icons/Redes';

const Footer = () => {
  return(
    <footer className='footer'>
      <h1>JAIME BURBANO</h1>
      <a className='footer__city' href='https://goo.gl/maps/UXQi7J6odSW5h7JB9' target='_blank' rel='noopener noreferrer'>Desde Cali - Colombia</a>
      <div className='footer__icons'>
        <Redes name='Correo'/>
        <Redes name='LinkedIn'/>
        <Redes name='Behance'/>
        <Redes name='Github'/>
        <Redes name='Fotografia'/>
      </div>
    </footer>
  )
}

export default Footer;