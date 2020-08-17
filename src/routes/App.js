import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as routes from '../assets/js/routes'

//Lybraries
import axios from 'axios';

//Utils
import ScrollToTop from '../utils/scrollToTop';

//Context
import JobsContext from '../utils/context/JobsContext';
import StudiesContext from '../utils/context/StudiesContext';
import VolunteeringContext from '../utils/context/VolunteeringContext';

//Containers
import Home from '../containers/Home'
import SobreMi from '../containers/SobreMi'
import Portafolio from '../containers/Portafolio'
import Contacto from '../containers/Contacto'
import Error404 from '../containers/Error404'
import Layout from '../containers/Layout'

function App() {

  const [data,setData] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      let data = await axios('/data.json');
      data = data.data;

      const dataTemp = { jobs: data.jobs.reverse(), study: data.study.reverse(), volunteering: data.volunteering.reverse(), certifications: data.certifications.reverse() }
      setData(dataTemp)
    }
    fetchData()
  }, [])


  return (
    <BrowserRouter>
      <ScrollToTop />
      <JobsContext.Provider value={data.jobs}>
        <StudiesContext.Provider value={data.study}>
          <VolunteeringContext.Provider value={data.volunteering}>
            <Layout>
              <Switch>
                <Route exact path={routes.INDEX} component={Home} />
                <Route exact path={routes.SOBREMI} component={SobreMi} />
                <Route exact path={routes.PORTAFOLIO} component={Portafolio} />
                <Route exact path={routes.CONTACTO} component={Contacto} />
                <Route component={Error404} />
              </Switch>
            </Layout>
            </VolunteeringContext.Provider>
          </StudiesContext.Provider>
        </JobsContext.Provider>
    </BrowserRouter>
  )
}

export default App
