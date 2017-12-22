import { RECEIVE_LISTINGS, RECEIVE_ADDITIONAL_LISTINGS } from '../actions/feed_actions';

const afterReducer = (oldState={}, action) => {
  if( [RECEIVE_LISTINGS, RECEIVE_ADDITIONAL_LISTINGS].includes(action.type) ){
    return action.payload.after;
  } else {
    return oldState;
  }
};

export default afterReducer;
