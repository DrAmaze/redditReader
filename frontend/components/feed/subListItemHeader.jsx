import React from 'react';
import SubListItem from './subListItem';
require('../_css/shared/three_d');


const Header = ({ listing }) => {

  // check to see if subreddit has thumbnail image
  const _generateImage = () => (
    (listing.thumbnail) ? <img src={listing.thumbnail}/> : null
  );

  const _handleClick = () => window.open(listing.url, '_blank');

  // to specify the type of list item
  const _generateClassName = () => (
    (listing.thumbnail) ? "detail-v" : "detail-h"
  );

  return(
    <div className="listing three-d" onClick={ _handleClick }>
      {_generateImage()}
      <SubListItem listing={listing} className={ _generateClassName() }/>
    </div>
  );
};

export default Header;
