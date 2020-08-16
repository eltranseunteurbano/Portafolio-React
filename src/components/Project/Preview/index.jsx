import React from 'react';
import './index.scss';

import {Link} from 'react-router-dom'
import * as Routes from '../../../assets/js/routes'

const Preview = (props,{title = 'NOMBRE DEL PROYECTO', category = 'Categoria', img = '/img/Projects/portatil.jpeg', imgwebp = '/img/Projects/portatil.webp', description = 'Puedo convertir con fidelidad el diseño de tu sitio web a código html y css modular listo para agregarle las funcionalidades.'}) => {
  return (
    <div className='ProjectPreview'>
      <picture loading='lazy' className='ProjectPreview__img'>
        <source type='image/webp' srcSet={process.env.PUBLIC_URL + imgwebp} />
        <source type='image/jpeg' srcSet={process.env.PUBLIC_URL + img} />
        <img src={process.env.PUBLIC_URL + props.img} alt={'Proyecto: ' + title} />
      </picture>

      <h1 className='ProjectPreview__title'>{title}</h1>
      <p className='ProjectPreview__category'>{category}</p>
      <p className='ProjectPreview__description'>{description}</p>

      <Link to={Routes.PORTAFOLIO} className='ProjectPreview__btn button'>VER PROJECTO</Link>
    </div>
  )
}

export default Preview;