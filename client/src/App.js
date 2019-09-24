import React, { Component } from 'react';
import styles from "./App.module.scss";
import Header from './Components/Header/Header';
import { BrowserRouter } from "react-router-dom";
import Router from './Routes/Router';
import { initialState } from './state/initialState';
import { setUserLogged, setUserName } from './state/userActions';

export const userContext = React.createContext({
  user: {
    name: "",
    isLogged: false
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState();
    this.setUserLogged = setUserLogged.bind(this);
    this.setUserName = setUserName.bind(this);
  }


  render() {

    const {
      setUserLogged,
      setUserName
    } = this;

    const value = {
      ...this.state,
      setUserName,
      setUserLogged
    }

    return (
      <div className={styles.app}>
        <BrowserRouter>
          <userContext.Provider value={value}>
            <Header />
            <div className={styles.body}>
              <Router />
            </div>
          </userContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
