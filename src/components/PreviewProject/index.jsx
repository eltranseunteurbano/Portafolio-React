import React from 'react';
import './index.scss';


import {Link} from 'react-router-dom';

const PreviewProject = ({title = 'NOMBRE DEL PROYECTO', category = 'Categoria', img = '/img/Projects/portatil.jpeg', imgwebp = '/img/Projects/portatil.webp'}) => {
  return(
    <Link to='' className='PreviewProject'>
      <picture loading='lazy' className='PreviewProject__img'>
        <source type='image/webp' srcSet={process.env.PUBLIC_URL + imgwebp} />
        <source type='image/jpeg' srcSet={process.env.PUBLIC_URL + img} />
        <img src={process.env.PUBLIC_URL + img} alt={'Proyecto: ' + title} />
      </picture>
      <h1 className='PreviewProject__title'>{title}</h1>
      <p className='PreviewProject__category'>{category}</p>
    </Link>
  )
}

export default PreviewProject;