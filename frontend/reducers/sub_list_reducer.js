import { ADD_SUB, DELETE_SUB, TOGGLE_SUB } from '../actions/sub_list_actions';
import { merge } from 'lodash';

export default function(oldState=[], action){
  let foundIdx = oldState.findIndex( sub => sub.name === action.subName );

  switch(action.type){
    case ADD_SUB:
      if(foundIdx !== -1 ){ return oldState; }

      let newSub = {
        name: action.subName,
        selected: true
      };
      
      return [...oldState, newSub].sort();

    case TOGGLE_SUB:
      newSub = {
        name: oldState[foundIdx].name,
        selected: !oldState[foundIdx].selected
      };

      return [...oldState.slice(0, foundIdx),
              newSub,
              ...oldState.slice(foundIdx + 1)];

    case DELETE_SUB:
      return [...oldState.slice(0, foundIdx),
              ...oldState.slice(foundIdx + 1)];

    default:
      return oldState;
  }
}
