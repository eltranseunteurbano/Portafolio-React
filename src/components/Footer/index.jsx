import React, {lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

const Redes = lazy(() => import ('../../assets/icons/Redes'));

const Footer = () => {
  return(
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  )
}

export default Footer;