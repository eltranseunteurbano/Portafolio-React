import React, { lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

const CardItem = lazy(() => import('../CardItem'));

const Studies = () => {
  return(
    <Suspense fallback={<Loading />}>
      <section className='Studies'>
        <article className='Studies__header'>
          <h2 className='subtitle'>Educación</h2>
          <h1 className='title'>¿DÓNDE Y QUÉ HE APRENDIDO?</h1>
        </article>

        <article className='Studies__body'>
          <div className='Studies__body__item'>
            <CardItem />
          </div>

          <div className='Studies__body__item'>
            <CardItem />
          </div>

          <div className='Studies__body__item'>
            <CardItem />
          </div>

          <div className='Studies__body__item'>
            <CardItem />
          </div>
        </article>

        <button className='button'>Ver Más</button>
      </section>
    </Suspense>
  )
}

export default Studies;