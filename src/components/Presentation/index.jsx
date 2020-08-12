import React from 'react';
import './index.scss';

const Presentation = () => {
  return (
    <section className='Presentation'>

      <picture loading='lazy' className='Presentation__img'>
          <source  type='image/webp' srcSet={process.env.PUBLIC_URL + '/img/fotos/JaimeBurbano.webp'}/>
          <source ype='image/jpeg' srcSet={process.env.PUBLIC_URL + '/img/fotos/JaimeBurbano.jpg'}/>
          <img width='100%' src={process.env.PUBLIC_URL + '/img/fotos/JaimeBurbano.jpg'} loading='lazy' alt='Foto Jaime Burbano' />
        </picture>

      <article className='Presentation__wp'>
        <h2 className='Presentation__wp__subtitle'>HOLA, SOY</h2>
        <h1 className='Presentation__wp__title'>JAIME BURBANO</h1>
        <p className='Presentation__wp__text'>Diseñador de Medios Interactivos de la Universidad Icesi con habilidades en el diseño de interfaces de usuario, desarrollo frontend y en producción audiovisual.</p>
        <a href={process.env.PUBLIC_URL + '/pdfs/Jaime Burbano CV.pdf'} download='Jaime Burbano - CV' className='button'>Descargar Hoja de Vida</a>
      </article>
    </section>
  )
}

export default Presentation;