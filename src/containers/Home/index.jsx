import React from 'react'
import './index.scss'

import Presentation from '../../components/Presentation'
import Services from '../../components/Services'
import LastProjects from '../../components/LastsProjects'

const Home = () => {
  return (
    <main className='Home appear'>
      <Presentation />
      <Services />
      <LastProjects />
    </main>
  )
}

export default Home;

