import React, { lazy, Suspense} from 'react';
import './index.scss';
import Loading from '../Loading';

import VolunteeringContext from '../../utils/context/VolunteeringContext';

const CardItem = lazy(() => import('../CardItem'));

const Volunteering = () => {

  const data = React.useContext(VolunteeringContext);
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
      <section className='Volunteering'>
        <article className='Volunteering__header'>
          <h2 className='subtitle'>Voluntariado</h2>
          <h1 className='title'>¿CÓMO HE AYUDADO A LA COMUNIDAD?</h1>
        </article>

        <article className='Volunteering__body'>
        {
          data && data.reverse().slice(0, itemsToShow).map( (item) => {
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

export default Volunteering;