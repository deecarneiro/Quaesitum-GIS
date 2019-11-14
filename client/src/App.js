import React, { Component } from 'react';
import styles from "./App.module.scss";
import Header from './Components/Header/Header';
import { BrowserRouter } from "react-router-dom";
import Router from './Routes/Router';
import { initialState } from './state/initialState';
import { setUserLogged, setUserName, setUserId } from './state/userActions';
import { setMap, setMapName, setMapLayers} from "./state/mapActions"; 

export const UserContext = React.createContext({
  user: {
    id: "",
    name: "",
    isLogged: false
  },
  map: {
    name: "",
    layers: []
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState();
    this.setUserLogged = setUserLogged.bind(this);
    this.setUserName = setUserName.bind(this);
    this.setUserId = setUserId.bind(this);
    this.setMap = setMap.bind(this);
    this.setMapName = setMapName.bind(this);
    this.setMapLayers = setMapLayers.bind(this);
  }


  render() {

    const {
      setUserLogged,
      setUserName,
      setUserId,
      setMap,
      setMapName,
      setMapLayers
    } = this;

    const value = {
      ...this.state,
      setUserName,
      setUserLogged,
      setUserId,
      setMap,
      setMapName,
      setMapLayers
    }

    return (
      <div className={styles.app}>
        <BrowserRouter>
          <UserContext.Provider value={value}>
            <Header />
            <div className={styles.body}>
              <Router />
            </div>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
