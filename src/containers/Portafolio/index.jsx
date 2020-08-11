import React from 'react'
import './index.scss'

import Presentation from '../../components/Presentation'
import Services from '../../components/Services'
import LastProjects from '../../components/LastsProjects'

const Portafolio = () => {
  return (
    <main className='Portafolio'>
      <Presentation />
      <Services />
      <LastProjects />
    </main>
  )
}

export default Portafolio;
