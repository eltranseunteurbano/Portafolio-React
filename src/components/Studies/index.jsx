import React, { lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

import StudiesContext from '../../utils/context/StudiesContext';

const CardItem = lazy(() => import('../CardItem'));

const Studies = () => {

  const data = React.useContext(StudiesContext);


  return(
    <Suspense fallback={<Loading />}>
      <section className='Studies'>
        <article className='Studies__header'>
          <h2 className='subtitle'>Educación</h2>
          <h1 className='title'>¿DÓNDE Y QUÉ HE APRENDIDO?</h1>
        </article>

        <article className='Studies__body'>
          {
            data && data.reverse().map( (item) => {
              return(
                <CardItem
                  title={item.carreer}
                  institution={item.institution}
                  url={item.url}
                  key={item.id}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  location={item.location}
                  type='study'
                />
              )
            })
          }
        </article>

        {data && data.length > 4 &&
          <button className='button'>Ver Más</button>
        }
      </section>
    </Suspense>
  )
}

export default Studies;