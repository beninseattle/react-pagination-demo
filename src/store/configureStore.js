import {createStore, combineReducers} from 'redux';
import {addressesReducer} from './reducers/addresses';
import {filtersReducer} from './reducers/filters';

export default () => {
  return createStore(
    combineReducers({
      addresses: addressesReducer,
      filters: filtersReducer
    })
  );
};