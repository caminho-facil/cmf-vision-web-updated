import React from 'react'

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'


import Home from './pages/Home'
import Privacy from './pages/Privacy'
import NotFound from './pages/Home'

import Login from './pages/Login'
import Register from './pages/Register'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
