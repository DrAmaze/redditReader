// Constants
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_ADDITIONAL_LISTINGS = "RECEIVE_ADDITIONAL_LISTINGS";
export const REQUEST_MORE_LISTINGS = "REQUEST_MORE_LISTINGS";
export const LOADING = "LOADING";

// Synchronous actions
export const receiveListings = payload => ({
  type: RECEIVE_LISTINGS,
  payload
});

export const receiveAdditionalListings = payload => ({
  type: RECEIVE_ADDITIONAL_LISTINGS,
  payload
});

export const requestMoreListings = () => ({
  type: REQUEST_MORE_LISTINGS
});

export const loading = () => ({
  type: LOADING
});
