import React from 'react';
import './index.scss';

const menu = ({active}) => {
  return(
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={`iconoHamburguesa ${active ? 'iconoHamburguesaActive' : ''}`}>
      <path d="M 0 4 L 26 4" className='iconoHamburguesa_line iconoHamburguesa_line1' strokeWidth='3' />
      <path d="M 0 12 L 26 12" className='iconoHamburguesa_line iconoHamburguesa_line2' strokeWidth='3' />
      <path d="M 0 20 L 26 20" className='iconoHamburguesa_line iconoHamburguesa_line3' strokeWidth='3' />
    </svg>
  )
}

export default menu;

