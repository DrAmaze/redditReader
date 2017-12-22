import { ajax } from 'jquery';
import path from 'path';

const ENDPOINT = "https://www.reddit.com/";

// Search for subs that match the user's query

const _extractSubredditNames = responseData => (
  responseData.data.children.map( sub => sub.data.display_name )
);

export const fetchSubs = matcher => {
  const reqPath = 'subreddits/search.json';

  const data = {
    q: matcher,
    limit: 7
  };

  return ajax({
    url: ENDPOINT + reqPath,
    method: "GET",
    data
  }).then( _extractSubredditNames );
};

// Fetch the feed!

const _normalizeListings = responseData => {
  const listings = {};
  responseData.data.children.forEach( child => {
    let thumb = child.data.thumbnail;
    child.data.thumbnail = (thumb.slice(0, 4) === "http" ? thumb : false);
    listings[child.data.name] = child.data;
  });
  return listings;
};

// This only happens if the user subscribes to a private sub
const _returnBlank = () => ({});

export const fetchFeed = (subName, filter, after) => {
  const _extractFeedContent = responseData => ({
    listings: _normalizeListings(responseData),
    after: {[subName]: responseData.data.after}
  });

  const subPath = (subName === "") ? "" : `r/${subName}`;
  const reqPath = path.join(subPath, filter) + '.json';

  const data = {
    limit: 10,
    after
  };

  return ajax({
    url: ENDPOINT + reqPath,
    method: "GET",
    data
  })
  .then( _extractFeedContent )
  .catch( _returnBlank );

};
