import { RECEIVE_SUBS, CLEAR_SEARCH } from '../actions/sub_search_actions';

export default function(oldState = [], action) {
  switch(action.type){
    case RECEIVE_SUBS:
      return action.subs;
    case CLEAR_SEARCH:
      return [];
    default:
      return oldState;
  }
}
