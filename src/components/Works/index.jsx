import React, { lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

import JobsContext from '../../utils/context/JobsContext';

const CardItem = lazy(() => import('../CardItem'));

const Works = () => {

  const data = React.useContext(JobsContext);
  const [itemsToShow, setItemsToShow] = React.useState(4);

  const onChangeItemsToShow = () => {
    let itemsTemp = itemsToShow + 4;
    if(itemsTemp >= data.length){
      setItemsToShow(data.length)
    } else {
      setItemsToShow(itemsTemp)
    }
  }

  return(
    <Suspense fallback={<Loading />}>
      <section className='Works'>
        <article className='Works__header'>
          <h2 className='subtitle'>Experiencia Laboral</h2>
          <h1 className='title'>¿QUÉ HE HECHO ANTES?</h1>
        </article>

        <article className='Works__body'>
        {
          data && data.slice(0, itemsToShow).map( (item) => {
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

        {
          data && data.length > 4 ?
            itemsToShow >= data.length ?
            <button className='button' onClick={() => setItemsToShow(4)}>Ocultar</button>
            :
            <button className='button' onClick={onChangeItemsToShow}>Ver Más</button>
          :
          ''
        }
      </section>
    </Suspense>

  )
}

export default Works;