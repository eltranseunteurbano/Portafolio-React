import React from 'react'
import './index.scss'

import Presentation from '../../components/Presentation'
import Services from '../../components/Services'
import LastProjects from '../../components/LastsProjects'

const Contacto = () => {
  return (
    <main className='Contacto'>
      <Presentation />
      <Services />
      <LastProjects />
    </main>
  )
}

export default Contacto;
