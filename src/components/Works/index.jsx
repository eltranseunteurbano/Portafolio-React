import React, { lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

const CardItem = lazy(() => import('../CardItem'));

const Works = () => {
  return(
    <Suspense fallback={<Loading />}>
      <section className='Works'>
        <article className='Works__header'>
          <h2 className='subtitle'>Experiencia Laboral</h2>
          <h1 className='title'>¿QUÉ HE HECHO ANTES?</h1>
        </article>

        <article className='Works__body'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </article>

        <button className='button'>Ver Más</button>
      </section>
    </Suspense>
  )
}

export default Works;