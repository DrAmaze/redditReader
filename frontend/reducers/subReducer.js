import {
  ADD_SUBREDDIT,
  DELETE_SUBREDDIT,
  TOGGLE_SUBREDDIT
} from '../actions/subredditActions';
import { merge } from 'lodash';

export default function(oldState = [], action){
  let idx = oldState.findIndex( sub => sub.name === action.subName );

  switch(action.type){
    case ADD_SUBREDDIT:
      if(idx !== -1 ){ return oldState; }

      let newSub = {
        name: action.subName,
        selected: true
      };

      return [...oldState, newSub].sort();

    case TOGGLE_SUBREDDIT:
      newSub = {
        name: oldState[idx].name,
        selected: !oldState[idx].selected
      };

      return [...oldState.slice(0, idx),
              newSub,
              ...oldState.slice(idx + 1)];

    case DELETE_SUBREDDIT:
      return [...oldState.slice(0, idx),
              ...oldState.slice(idx + 1)];

    default:
      return oldState;
  }
}
