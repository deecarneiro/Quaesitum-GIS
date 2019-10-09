import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import GenerateMap from '../Pages/GenerateMap/GenerateMap';
import { userContext } from '../App';
import EditProfile from '../Pages/EditProfile/EditProfile';

const publicRoutes = [
    <Route key="1" path='/' exact={true}
        component={() => <Login />}
    ></Route>,
    <Route key="2" path='/login' exact={true}
        component={() => <Login enter />}
    ></Route>,
    <Route key="3" path='/about' exact={true}
        component={() => <About />}
    ></Route>
];

const privateRoutes = [
    <Route key="5" path='/home' exact={true}
        component={() => <Home />}
    ></Route>,
    <Route key="6" path='/generateMap' exact={true}
        component={() => <GenerateMap />}
    ></Route>,
    <Route key="6" path='/editProfile' exact={true}
        component={() => <EditProfile />}
    ></Route>
]

export default () => {
    const { user } = useContext(userContext);
    if (user.isLogged) {
        return (
            <Switch>
                {privateRoutes},
                {publicRoutes},
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