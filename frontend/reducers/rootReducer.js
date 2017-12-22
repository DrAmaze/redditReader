import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import SubReducer from './subReducer';
import FilterReducer from './filterReducer';
import FeedReducer from './feedReducer';
import afterReducer from './afterReducer';

export default combineReducers({
  subSearchResults: SearchReducer,
  subList: SubReducer,
  filter: FilterReducer,
  feed: FeedReducer,
  after: afterReducer
});
