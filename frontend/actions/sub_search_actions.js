import * as UTIL from '../util/api_util.js';

// Constants
export const RECEIVE_SUBS = "RECEIVE_SUBS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

// Async Actions
export const requestSubs = matcher => dispatch => {
  if(matcher.length <= 2){
    dispatch(clearSearch());
    return;
  }
  return UTIL.fetchSubs(matcher)
    .then( subs => dispatch(receiveSubs(subs)) );
};

// Sync Actions
export const receiveSubs = subs => ({
  type: RECEIVE_SUBS,
  subs
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});
