import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as routes from '../assets/js/routes'

import Home from '../containers/Home'

//css
import '../assets/css/generals.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.INDEX} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
