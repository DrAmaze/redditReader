import {
  RECEIVE_LISTINGS,
  RECEIVE_ADDITIONAL_LISTINGS
} from '../actions/feedActions';

const afterReducer = (oldState = {}, action) => {
  if( RECEIVE_LISTINGS === action.type || RECEIVE_ADDITIONAL_LISTINGS === action.type){
    return action.payload.after;
  } else {
    return oldState;
  }
};

export default afterReducer;
