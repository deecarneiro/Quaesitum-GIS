import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import GenerateMap from '../Pages/GenerateMap/GenerateMap';
import { UserContext } from '../App';

export default () => {
    const { user } = useContext(UserContext);
    const publicRoutes = [
        <Route key="1" path='/' exact
            component={() => <Login />}
        ></Route>,
        <Route key="2" path='/login' exact
            component={() => <Login enter="enter" />}
        ></Route>,
        <Route key="3" path='/about' exact
            component={() => <About />}
        ></Route>
    ];

    const privateRoutes = [
        <Route key="5" path='/home' exact
            component={() => <Home />}
        ></Route>,
        <Route key="6" path='/generateMap' exact
            component={() => <GenerateMap />}
        ></Route>,
        <Route key="7" path='/generateMap/map' exact
            component={() => <GenerateMap withMap />}
        ></Route>,
        <Route key="8" path='/editProfile' exact
            component={() => <Login enter="editProfile" />}
        ></Route>
    ]

    if (user.isLogged) {
        return (
            <Switch>
                {privateRoutes},
                <Redirect key="4" to="/home" />
            </Switch>
        )
    }
    return (
        <Switch>
            {publicRoutes},
            <Redirect key="4" to="/" />
        </Switch>
    )
}