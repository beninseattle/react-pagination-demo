import React, { Component } from 'react';
// eslint-disable-next-line
import reset from 'reset-css';

import './App.css';
import Header from './components/Navigation';
import Content from './components/Content';
// import configureStore from './store/configureStore';

class App extends Component {
  // constructor( props ){
  //   super(props);
  //   this.store = configureStore();
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
