import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cms from './reducers/cms';
import modal from './reducers/modal';
import place from './reducers/place';
import ui from './reducers/ui';
import unit from './reducers/unit';

const reducers = combineReducers({
  cms,
  modal,
  place,
  ui,
  unit
});

const configureStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  )
};

export default configureStore;
