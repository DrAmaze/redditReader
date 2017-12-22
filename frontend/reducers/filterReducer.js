import { SET_FILTER } from '../actions/filterActions';

export default (oldState = 'HOT', action) => {
  if(action.type === SET_FILTER){
    return action.name;
  } else {
    return oldState;
  }
};
