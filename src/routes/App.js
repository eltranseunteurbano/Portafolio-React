import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as routes from '../assets/js/routes'

//Utils
import ScrollToTop from '../utils/scrollToTop';

//Containers
import Home from '../containers/Home'
import SobreMi from '../containers/SobreMi'
import Portafolio from '../containers/Portafolio'
import Contacto from '../containers/Contacto'
import Error404 from '../containers/Error404'
import Layout from '../containers/Layout'


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path={routes.INDEX} component={Home} />
          <Route exact path={routes.SOBREMI} component={SobreMi} />
          <Route exact path={routes.PORTAFOLIO} component={Portafolio} />
          <Route exact path={routes.CONTACTO} component={Contacto} />
          <Route component={Error404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
