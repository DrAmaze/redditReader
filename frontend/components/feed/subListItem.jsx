import React from 'react';

const subListItem = ({ listing, className }) => {

  // to simplify the css
  const title = () => (
    listing.title.length > 80 ? listing.title.slice(0, 77) + "..." : listing.title
  );

  return(
    <div className={className}>
      <h3>{ title() }</h3>
      <div>
        <span>
          <strong>Sub:</strong> {listing.subreddit}
        </span>
        <span>
          <strong>Up Votes:</strong> {listing.ups}
        </span>
        <span>
          <strong>Author:</strong> {listing.author}
        </span>
      </div>
    </div>
  );
};

export default subListItem;
