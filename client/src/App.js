import React, { Component } from 'react';
import styles from "./App.module.scss";
import Header from './Components/Header/Header';
import { BrowserRouter } from "react-router-dom";
import Router from './Routes/Router';
import { initialState } from './state/initialState';
import { setUserLogged } from './state/userActions';

export const userContext = React.createContext({
  isLogged: true
});

class App extends Component {
  constructor(props){
    super(props);

    this.state = initialState();
    this.setUserLogged = setUserLogged.bind(this);
  }


  render() {

    const {
      setUserLogged
    } = this;

    const value = {
      ...this.state,
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
