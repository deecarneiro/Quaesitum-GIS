import React, { Component } from 'react';
import styles from "./App.module.scss";
import Header from './Components/Header/Header';
import { BrowserRouter } from "react-router-dom";
import Router from './Components/Router';

class App extends Component {
  state = {
    response: ''
  };


  render() {
    return (
      <div className={styles.app}>
        <BrowserRouter>
          <Header />
          <div className={styles.body}>
            <Router />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
