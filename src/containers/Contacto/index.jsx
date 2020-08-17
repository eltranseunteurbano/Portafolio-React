import React, {lazy, Suspense} from 'react'
import './index.scss'
import Loading from '../../components/Loading';

const Iconos = lazy(() => import ('../../components/Iconos'));

const Contacto = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className='Contacto'>
        <article className='Contacto__header'>
          <h2 className='subtitle'>Contacto</h2>
          <h1 className='title'>HABLEMOS</h1>
        </article>

        <article className='Contacto__body'>
          <div className='Contacto__body__img' >
            <picture loading='lazy' >
              <source  type='image/webp' srcSet={process.env.PUBLIC_URL + '/img/fotos/JaimeBurbano.webp'}/>
              <source ype='image/jpeg' srcSet={process.env.PUBLIC_URL + '/img/fotos/JaimeBurbano.jpg'}/>
              <img width='100%' src={process.env.PUBLIC_URL + '/img/fotos/JaimeBurbano.jpg'} loading='lazy' alt='Foto Jaime Burbano' />
          </picture>
          </div>

          <div className='Contacto__body__content'>
            <h2 className='Contacto__body__content__subtitle'>SIN PENA,</h2>
            <h1 className='Contacto__body__content__title'>HABLEMOS</h1>
            <p className='Contacto__body__content__text'>Pongámonos en contacto y descubramos cómo puedo ayudarte. Te dejo diferentes caminos para encontrarme.</p>

              <Iconos />

            <p className='Contacto__body__content__text'>Si quieres podemos reunirnos, agendemos un reunión, te dejó mi disponibilidad</p>
            <a href='https://www.calendly.com/eltranseunteurbano' target='_blank' rel='noopener noreferrer' className='button'>Agendar Reunión</a>
          </div>
        </article>
      
        <div />
      </main>
    </Suspense>
  )
}

export default Contacto;