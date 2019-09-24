import React, {useContext} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import GenerateMap from '../Pages/GenerateMap/GenerateMap';
import { userContext } from '../App';

const publicRoutes = [
    <Route key="1" path='/' exact={true} 
        component={() => <Login/>}
    ></Route>,
    <Route key="2" path='/login' exact={true} 
        component={() => <Login enter/>}
    ></Route>,
    <Route key="3" path='/about' exact={true} 
        component={() => <About/>}
    ></Route>,
    <Redirect key="4" to="/" />
];

const privateRoutes = [
    <Route key="5" path='/home' exact={true} 
        component={() => <Home/>}
    ></Route>,
    <Route key="6" path='/generateMap' exact={true} 
        component={() => <GenerateMap/>}
    ></Route>
]

export default () => {
    const { user } = useContext(userContext);
    if(user.isLogged){
        return(
            <Switch>
                {privateRoutes}
                {publicRoutes}
            </Switch>
        )
    }
    return (
        <Switch>
            {publicRoutes}
        </Switch>
    )
}