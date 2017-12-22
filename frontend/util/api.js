import { ajax } from 'jquery';
import path from 'path';

// This is the site this app will be pinging
const ENDPOINT = "https://www.reddit.com/";

// number of subreddits that will appear per query
const MAX_SUBREDDITS = 10;

// Search for subs that match the user's query
const _extractSubredditNames = responseData => (
  responseData.data.children.map(subreddit => subreddit.data.display_name )
);

// Fetch the subreddits that match the user input
export const fetchSubreddits = input => {
  const reqPath = 'subreddits/search.json';

  const data = {
    q: input,
    limit: MAX_SUBREDDITS
  };

  return $.ajax({
    url: ENDPOINT + reqPath,
    method: "GET",
    data
  }).then(_extractSubredditNames);
};

// Response if user does not have access to subreddit
const _returnNil = () => ({});

// The following functions house the logic for fetching the feed
const _normalizeListings = responseData => {
  const subs = {};
  responseData.data.children.forEach(child => {
    let thumb = child.data.thumbnail;
    child.data.thumbnail = (thumb.slice(0, 4) === "http" ? thumb : false);
    subs[child.data.name] = child.data;
  });
  return subs;
};

export const fetchFeed = (subName, filter, after) => {
  const _extractFeedContent = responseData => ({
    listings: _normalizeListings(responseData),
    after: {[subName]: responseData.data.after}
  });

  const subPath = (subName === "") ? "" : `r/${subName}`;
  const reqPath = path.join(subPath, filter) + '.json';

  const data = {
    limit: MAX_SUBREDDITS,
    after
  };

  return $.ajax({
    url: ENDPOINT + reqPath,
    method: "GET",
    data
  }).then(_extractFeedContent)
  .catch(_returnNil);

};
