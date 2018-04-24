import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import BookLists from './container/BookLists'
import AuthorsList from './container/AuthorsList'
import AuthorDetails from './container/AuthorDetails'
import store from './store';

class App extends Component {
  render() {
    return (
     /*  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
      <Provider store={store}>
        <Fragment>
        <BookLists />
        <AuthorsList />
        <AuthorDetails />
        </Fragment>
      </Provider>

    );
  }
}

export default App;
