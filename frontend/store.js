import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Middleware from './middleware';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, Middleware)
);

export default store;
