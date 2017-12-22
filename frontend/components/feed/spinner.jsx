import React from 'react';
require('../_css/spinner');

export default () => {

  const style = {
    top: window.scrollY + (window.innerHeight / 2) - 40
  };


  return(
    <div className="spinner" style={style}>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  );
};
