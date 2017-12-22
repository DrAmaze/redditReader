export const listingsInView = state => {
  const listings = [];

  state.feed.order.forEach( id => {
    listings.push(state.feed.listings[id]);
  });

  return listings;
};
