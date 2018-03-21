import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {addressesReducer} from './reducers/addresses';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    addressesReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}