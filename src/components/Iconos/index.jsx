import React, {lazy} from 'react';
import './index.scss';

const Redes = lazy(() => import('../../assets/icons/Redes'));

const Iconos = ({showIcon = [true, true, true, true, true, true, true], maxWidth = 300}) => {
  return (
    <div className='Iconos' style={{maxWidth}}>
      {showIcon[0] && <Redes round={true} name='Correo'/>}
      {showIcon[1] && <Redes round={true} name='LinkedIn'/>}
      {showIcon[2] && <Redes round={true} name='Behance'/>}
      {showIcon[3] && <Redes round={true} name='Github'/>}
      {showIcon[4] && <Redes round={true} name='Fotografia'/>}
      {showIcon[5] && <Redes round={true} name='Dribbble'/>}
      {showIcon[6] && <Redes round={true} name='Instagram'/>}
    </div>
  )
}

export default Iconos;