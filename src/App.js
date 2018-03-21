import React from 'react';
import {Provider} from 'react-redux';
// eslint-disable-next-line
import reset from 'reset-css';

import './App.css';
import Loading from './components/Loading';
import Header from './components/Navigation';
import Content from './components/Content';
import configureStore from './store/configureStore';
import {startSetAddresses} from './store/actions/addresses';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.store = configureStore();
  }

  componentDidMount() {
    this.store.dispatch(startSetAddresses()).then(() => {
      this.setState({loading: false});
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading/>;
    } else {
      return (
        <Provider store={this.store}>
        <div className="App">
          <Header/>
          <Content/>
        </div>
        </Provider>
      );
    }
  }
}

export default App;
