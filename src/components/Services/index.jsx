import React, {lazy, Suspense} from 'react'
import './index.scss';
import Loading from '../Loading';

const Service = lazy(() => import('./Service'));

const data = [
  {
    id: 1,
    title: 'Diseño de interfaces',
    image: '/img/iconos/Diseno.svg',
    imagewebp: '/img/iconos/Diseno.webp',
    description: 'Puedo diseñar y prototipar rápidamente landing pages, aplicaciónes web y móviles con tecnologías como Figma y Invision.'
  }, {
    id: 2,
    title: 'Maquetación web',
    image: '/img/iconos/Maqueta.svg',
    imagewebp: '/img/iconos/Maqueta.webp',
    description: 'Puedo convertir con fidelidad el diseño de tu sitio web a código html y css modular listo para agregarle las funcionalidades.'
  },{
    id: 3,
    title: 'Desarrollo frontend',
    image: '/img/iconos/Desarrollo.svg',
    imagewebp: '/img/iconos/Desarrollo.webp',
    description: 'Puedo maquetar y agregarle funcionalidades a tu sitio web  con tecnologías como javascript, React, Vue, Svelte - Sapper.'
  },
]

const Services = () => {
  return(
    <Suspense fallback={<Loading />}>
      <section className='Services' style={{backgroundImage: 'url("' + process.env.PUBLIC_URL + '/img/background/service.svg")'}}>
        <article className='Services__wp'>
          <div className='Services__header'>
            <h2 className='subtitle'>Services</h2>
            <h1 className='title'>¿CÓMO PUEDO AYUDARTE?</h1>
          </div>

          <div className='Services__services'>
            {data.map( (item) => {
              return(
                <Service
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  imagewebp={item.imagewebp}
                  description={item.description}
                />
              )
            })
            }
          </div>
        </article>
      </section>
    </Suspense>
  )
}

export default Services;