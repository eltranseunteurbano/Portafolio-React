import React, {lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

const Iconos = lazy(() => import ('../../components/Iconos'));

const Footer = () => {
  return(
    <Suspense fallback={<Loading />}>
      <footer className='footer'>
        <h1>JAIME BURBANO</h1>
        <a className='footer__city' href='https://goo.gl/maps/UXQi7J6odSW5h7JB9' target='_blank' rel='noopener noreferrer'>Desde Cali - Colombia</a>
        <Iconos showIcon={[true, true, true, true, true, false, false]} maxWidth={200}/>
      </footer>
    </Suspense>
  )
}

export default Footer;