import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../Pages/Login/Login';

export default () => {
    return (
        <Switch>
            <Route path='/' exact={true} 
                component={() => <Login/>}
            ></Route>
            <Route path='/login' exact={true} 
                component={() => <Login enter/>}
            ></Route>
            <Redirect to="/" />
        </Switch>
    )
}