import React from 'react';
import Details from './details';
require('../_css/shared/three_d');


const Listing = ({listing}) => {

  const _handleClick = () => window.open(listing.url, '_blank');

  const _generateImage = () => (
    (listing.thumbnail) ? <img src={listing.thumbnail}/> : null
  );

  const _generateDetailClassName = () => (
    (listing.thumbnail) ? "detail-v" : "detail-h"
  );

  return(
    <div className="listing three-d" onClick={_handleClick}>
      {_generateImage()}
      <Details listing={listing} className={_generateDetailClassName()}/>
    </div>
  );
}

export default Listing;
