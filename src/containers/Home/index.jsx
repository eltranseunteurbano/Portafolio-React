import React from 'react'
import './index.scss'

import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import Services from '../../components/Services'
import LastProjects from '../../components/LastsProjects'
import Footer from '../../components/Services/Footer'

const Home = () => {
  return (
    <main className='Home appear'>
      <Header />
      <Presentation />
      <Services />
      <LastProjects />
      <Footer/>
    </main>
  )
}

export default Home;

