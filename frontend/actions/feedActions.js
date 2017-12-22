// Constants
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_ADDITIONAL_LISTINGS = "RECEIVE_ADDITIONAL_LISTINGS";
export const REQUEST_MORE_LISTINGS = "REQUEST_MORE_LISTINGS";
export const LOADING = "LOADING";

// Synchronous actions
export const receiveListings = data => ({
  type: RECEIVE_LISTINGS,
  data
});

export const receiveAdditionalListings = data => ({
  type: RECEIVE_ADDITIONAL_LISTINGS,
  data
});

export const requestMoreListings = () => ({
  type: REQUEST_MORE_LISTINGS
});

export const loading = () => ({
  type: LOADING
});
