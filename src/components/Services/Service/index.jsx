import React from 'react';
import './index.scss';

const Service = ({title = 'Aquí va el titulo', image, imagewebp, description = 'lorem ipsum'}) => {
  return(
    <div className='Service'>
      <h1 className='Service__title'>{title}</h1>
      <picture  loading='lazy' className='Service__img'>
        <source type='image/webp' srcSet={process.env.PUBLIC_URL + imagewebp} />
        <source type='image/jpeg' srcSet={process.env.PUBLIC_URL + image} />
        <img src={process.env.PUBLIC_URL + image} loading='lazy' alt={'Imagen ilustrativa de: "' + title + '"'} />
      </picture>
      <p className='Service__text'>{description}</p>
    </div>
  )
}

export default Service;