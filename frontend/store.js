import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import FeedMiddleware from './middleware/feed_middleware';
import rootReducer from './reducers/root_reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, FeedMiddleware)
);

export default store;
