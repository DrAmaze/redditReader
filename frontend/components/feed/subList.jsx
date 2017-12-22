import React from 'react';
import Waypoint from 'react-waypoint';

import Header from './subListItemHeader';
import Spinner from './spinner';

const Feed = ({listings, loading, requestMoreListings}) => {

  const load = () => loading ? <Spinner /> : null;

  return(
    <div id="feed" className={ loading ? "feed-loading" : "" }>
      { listings.map( listing => (
        <Header listing={listing} key={listing.name} />
      ))}
      <Waypoint onEnter={requestMoreListings}/>
      { load() }
    </div>
  );
};

export default Feed;
