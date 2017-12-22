import { combineReducers } from 'redux';
import subSearchReducer from './sub_search_reducer';
import subListReducer from './sub_list_reducer';
import filtersReducer from './filters_reducer';
import feedReducer from './feed_reducer';
import afterReducer from './after_reducer';

export default combineReducers({
  subSearchResults: subSearchReducer,
  subList: subListReducer,
  filter: filtersReducer,
  feed: feedReducer,
  after: afterReducer
});
