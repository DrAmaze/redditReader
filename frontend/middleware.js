import { ADD_SUBREDDIT, TOGGLE_SUBREDDIT, DELETE_SUBREDDIT } from './actions/subredditActions';
import { SET_FILTER } from './actions/filterActions';
import { receiveListings, receiveAdditionalListings, loading,
         REQUEST_MORE_LISTINGS } from './actions/feedActions';
import { fetchFeed } from './util/api';
import { merge } from 'lodash';
import Promise from 'react-promise';

const ACTIONS = [ADD_SUBREDDIT, TOGGLE_SUBREDDIT, DELETE_SUBREDDIT, REQUEST_MORE_LISTINGS,
                         SET_FILTER];

export default ({ getState, dispatch }) => next => action => {

  // Determine if action affects the feed
  if(!ACTIONS.includes(action.type)){ return next(action); }

  // Determine if reset feed or simply push to end
  const successDispatch = (action.type === REQUEST_MORE_LISTINGS) ?
    receiveAdditionalListings : receiveListings;

  next(action);
  dispatch(loading());

  let { subList, filter, after } = getState();
  filter = filter.toLowerCase();
  let subNames = subList.filter(
    sub => sub.selected
  ).map(
    sub => sub.name
  );

  if(subNames.length === 0){
    subNames = [''];
  } // Default to reddit homepage

  // Fetch the feed for each sub-reddit
  const promises = subNames.map(
    subName => fetchFeed(subName, filter, after[subName])
  );

  // Only dispatch the success action after others have been fetched
  Promise.all(promises)
    .then( values => merge({}, ...values) )
    .then( feed => dispatch(successDispatch(feed)) );
};
