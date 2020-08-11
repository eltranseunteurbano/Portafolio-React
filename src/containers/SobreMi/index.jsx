import React from 'react';
import './index.scss'

import Presentation from '../../components/Presentation'
import Services from '../../components/Services'
import LastProjects from '../../components/LastsProjects'

const SobreMi = () => {
  return (
    <main className='SobreMi'>
      <Presentation />
      <Services />
      <LastProjects />
    </main>
  )
}

export default SobreMi;

