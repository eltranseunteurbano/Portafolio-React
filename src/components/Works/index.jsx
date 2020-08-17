import React, { lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

import JobsContext from '../../utils/context/JobsContext';

const CardItem = lazy(() => import('../CardItem'));

const Works = () => {

  const data = React.useContext(JobsContext);

  return(
    <Suspense fallback={<Loading />}>
      <section className='Works'>
        <article className='Works__header'>
          <h2 className='subtitle'>Experiencia Laboral</h2>
          <h1 className='title'>¿QUÉ HE HECHO ANTES?</h1>
        </article>

        <article className='Works__body'>
        {
          data && data.reverse().map( (item) => {
            return(
              <CardItem
                title={item.rol}
                institution={item.company}
                description={item.description}
                startDate={item.startDate}
                endDate={item.endDate}
                url={item.url}
                location={item.location}
                key={item.id}
              />
            )
          })
        }

        </article>

        <button className='button'>Ver Más</button>
      </section>
    </Suspense>

  )
}

export default Works;