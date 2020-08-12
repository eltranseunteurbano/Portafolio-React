import React, { lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

const CardItem = lazy(() => import('../CardItem'));

const Works = () => {
  return(
    <Suspense fallback={<Loading />}>
      <section className='Works'>
        <article className='Works__header'>
          <h2 className='subtitle'>Educación</h2>
          <h1 className='title'>¿DÓNDE Y QUÉ HE APRENDIDO?</h1>
        </article>

        <article className='Works__body'>
          <div className='Works__body__item'>
            <CardItem />
          </div>

          <div className='Works__body__item'>
            <CardItem />
          </div>

          <div className='Works__body__item'>
            <CardItem />
          </div>

          <div className='Works__body__item'>
            <CardItem />
          </div>
        </article>

        <button className='button'>Ver Más</button>
      </section>
    </Suspense>
  )
}

export default Works;