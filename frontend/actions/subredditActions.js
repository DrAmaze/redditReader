/// Constants
export const ADD_SUBREDDIT = "ADD_SUBREDDIT";
export const DELETE_SUBREDDIT = "DELETE_SUBREDDIT";
export const TOGGLE_SUBREDDIT = "TOGGLE_SUBREDDIT";

// Synchronous actions
export const addSub = subreddit => ({
  type: ADD_SUBREDDIT,
  subreddit
});

export const toggleSub = subreddit => ({
  type: TOGGLE_SUBREDDIT,
  subreddit
});

export const deleteSub = subreddit => ({
  type: DELETE_SUBREDDIT,
  subreddit
});
