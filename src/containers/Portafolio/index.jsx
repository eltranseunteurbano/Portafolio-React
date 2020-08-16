import React, {lazy, Suspense} from 'react'
import './index.scss'
import Loading from '../../components/Loading';

const PreviewProject = lazy(() => import('../../components/Project/Preview'));

const data = [
  {name: 'Get2wear', cateogry: 'Maqueta', id: 0},
  {name: 'SenciYa', cateogry: 'Maqueta', id: 1},
  {name: '72 Signals', cateogry: 'Maqueta', id: 2},
  {name: 'MoniHub', category: 'Diseño de Interfaz', id: 3}
]

const Portafolio = () => {

  const [filter, setFilter] = React.useState('');
  const [menuActived, setMenuActived] = React.useState(false)

  const onChangeFilter = ( filter ) => {
    setFilter(filter)
    setMenuActived((false))
  }

  return (
    <Suspense fallback={<Loading />}>
      <main className='Portafolio'>
        <div className='Portafolio__header'>
          <h2 className='subtitle'>Portafolio</h2>
          <h1 className='title'>MIS PROYECTOS</h1>
        </div>

        <article className='Portafolio__body'>
          <div className='Portafolio__body__filter-actived' onClick={() => setMenuActived(!menuActived)}>
            <div />
            <p className='Portafolio__body__filter-actived-text '>
              {
                filter === '' ? 'Todos' :
                filter === 'ui' ? 'Diseño de Interfaces' :
                filter === 'development' ? 'Desarrollo' :
                filter === 'filmmaking' ? 'Fotografía y Video'
                : ''
              }
            </p>
            <div className='Portafolio__body__filter-actived-down' style={ menuActived ? {transform: 'rotate(' + 180 + 'deg)'} : {} } >
              <img src={process.env.PUBLIC_URL + '/img/iconos/Arrow.svg'} alt='Arrow Down' />
            </div>
          </div>

          <div className='Portafolio__body__filters' style={menuActived ? {display: 'flex'} : {}}>
            <p className={ filter === '' ? 'Portafolio__body__filters__item Portafolio__body__filters__item-selected' : 'Portafolio__body__filters__item' } onClick={() => onChangeFilter('')}>Todos</p>
            <p className={ filter === 'ui' ? 'Portafolio__body__filters__item Portafolio__body__filters__item-selected' : 'Portafolio__body__filters__item' } onClick={() => onChangeFilter('ui')}>Diseño de Interfaces</p>
            <p className={ filter === 'development' ? 'Portafolio__body__filters__item Portafolio__body__filters__item-selected' : 'Portafolio__body__filters__item' } onClick={() => onChangeFilter('development')}>Desarrollo</p>
            <p className={ filter === 'filmmaking' ? 'Portafolio__body__filters__item Portafolio__body__filters__item-selected' : 'Portafolio__body__filters__item' } onClick={() => onChangeFilter('filmmaking')}>Fotografía y Video</p>
          </div>
        </article>

        <article className='Portafolio__content'>
          {data.map( (item) => {
            return (
              <PreviewProject project={item} key={item.id} />
            )
          })}
        </article>
      </main>
      </Suspense>
  )
}

export default Portafolio;