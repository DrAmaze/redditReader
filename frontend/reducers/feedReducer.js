import {
  RECEIVE_LISTINGS,
  RECEIVE_ADDITIONAL_LISTINGS,
  LOADING
} from '../actions/feedActions';

import { keys, merge } from 'lodash';

const _defaultState = {
  listings: {},
  order: [],
  loading: false
};

const feedReducer = (oldState = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_LISTINGS:
      return {
        listings: action.payload.listings,
        order: action.payload.listings,
        loading: false
      };

    case RECEIVE_ADDITIONAL_LISTINGS:
      const newListings = merge({}, oldState.listings, action.payload.listings);
      const newOrder = oldState.order.concat(action.payload.listings);
      return {
        listings: newListings,
        order: newOrder,
        loading: false
      };

    case LOADING:
      return merge({}, oldState, {loading: true});

    default:
      return oldState;
  }
};

export default feedReducer;
