import React from 'react';
import './index.scss';

const Logo = ({active}) =>{
  return(
    <div className={active ? 'logo logo-active': 'logo'}>
      <figure className='logo__img'>
        <img src={process.env.PUBLIC_URL + '/img/iconos/logo.svg'} alt='Logo Jaime Burbano' />
      </figure>

      <h1 className='logo__name'>JAIME<br/><strong>BURBANO</strong> </h1>
    </div>
    )
}

export default Logo;