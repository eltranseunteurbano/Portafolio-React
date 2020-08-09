import React from 'react';
import './index.scss';

const LastProjects = () => {

  React.useEffect ( () => {
    const projectChange = setInterval(() => console.log('cambio'), 3000);
    return () => clearInterval(projectChange)
  }, [])
  return(
    <section className='LastProjects'>
      <div className='LastProjects__header'>
          <h2 className='subtitle'>Portafolio</h2>
          <h1 className='title'>ÚLTIMOS PROYECTOS</h1>
        </div>
    </section>
  )
}

export default LastProjects;