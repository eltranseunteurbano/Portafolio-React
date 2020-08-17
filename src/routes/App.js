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
      const jobs = await axios('http://localhost:3004/jobs');
      const study = await axios('http://localhost:3004/study');
      const volunteering = await axios('http://localhost:3004/volunteering');
      const certifications = await axios('http://localhost:3004/certifications');

      const dataTemp = { jobs: jobs.data, study: study.data, volunteering: volunteering.data, certifications: certifications.data }
      setData(dataTemp)
    }
    fetchData();
  }, [])


  return (
    <BrowserRouter>
      <ScrollToTop />
      <JobsContext.Provider value={data.jobs}>
      <StudiesContext.Provider value={data.study}>
        <Layout>
          <Switch>
            <Route exact path={routes.INDEX} component={Home} />
            <Route exact path={routes.SOBREMI} component={SobreMi} />
            <Route exact path={routes.PORTAFOLIO} component={Portafolio} />
            <Route exact path={routes.CONTACTO} component={Contacto} />
            <Route component={Error404} />
          </Switch>
        </Layout>
        </StudiesContext.Provider>
        </JobsContext.Provider>
    </BrowserRouter>
  )
}

export default App
