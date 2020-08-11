import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import * as Routes from '../../assets/js/routes';
import PreviewProject from '../PreviewProject';

const data = [
  {name: 'Get2wear', cateogry: 'Maqueta', id: 0},
  {name: 'SenciYa', cateogry: 'Maqueta', id: 1},
  {name: '72 Signals', cateogry: 'Maqueta', id: 2},
  {name: 'MoniHub', category: 'Diseño de Interfaz', id: 3}
]

const LastProjects = () => {

  return(
    <section className='LastProjects'>
      <div className='LastProjects__header'>
        <h2 className='subtitle'>Portafolio</h2>
        <h1 className='title'>ÚLTIMOS PROYECTOS</h1>
      </div>

      <article className='LastProjects__body'>
      <AliceCarousel
        mouseTrackingEnabled
        autoPlayInterval={3000}
        autoPlay={true}
        keysControlDisabled={true}
        buttonsDisabled
        responsive={
          {
            0: { items: 1},
            570: { items: 2},
            780: {items: 3},
            1200: {items: 3}

          }
        }
        >
        {data.map((project) => {
          return(
            <PreviewProject title={project.name} category={project.category} key={project.id} />
          )
        })}
        </AliceCarousel>
      </article>

      <article className='LastProjects__footer'>
        <Link to={Routes.PORTAFOLIO} className='button'>VER TODOS</Link>
      </article>

    </section>
  )
}

export default LastProjects;