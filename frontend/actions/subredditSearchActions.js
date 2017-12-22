import * as ApiUtil from '../util/api.js';

// Constants
export const RECEIVE_SUBS = "RECEIVE_SUBS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

// Synchronous Actions
export const receiveSubs = subreddits => ({
  type: RECEIVE_SUBS,
  subreddits
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

// Asynchronous Actions
export const requestSubs = matcher => dispatch => {
  if(matcher.length < 3){
    dispatch(clearSearch());
    return;
  }
  return ApiUtil.fetchSubs(matcher)
  .then(subs => dispatch(receiveSubs(subs)));
};
