import React, { lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

import StudiesContext from '../../utils/context/StudiesContext';

const CardItem = lazy(() => import('../CardItem'));

const Studies = () => {

  const data = React.useContext(StudiesContext);
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
      <section className='Studies'>
        <article className='Studies__header'>
          <h2 className='subtitle'>Educación</h2>
          <h1 className='title'>¿DÓNDE Y QUÉ HE APRENDIDO?</h1>
        </article>

        <article className='Studies__body'>
          {
            data && data.map( (item) => {
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

export default Studies;