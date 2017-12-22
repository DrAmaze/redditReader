import React from 'react';
require('../../../_css/list');
require('../../../_css/three_d');
require('../../../_css/exit');
require('../../../_css/line');

export default ({ subList, toggleSub, deleteSub }) => {

  const _handleChange = e => {
    toggleSub(e.currentTarget.id);
  };

  const _handleDelete = subName => () => deleteSub(subName);

  // Creates the list of subs & checkboxes
  const _renderSubs = () => (
    subList.map( sub => (
      <div key={sub.name}>
        <input type="checkbox"
               id={sub.name}
               checked={sub.selected}
               onChange={_handleChange} />

        <label htmlFor={sub.name}>{sub.name}</label>
        <div onClick={_handleDelete(sub.name)}>
          times-circle
        </div>
      </div>
    ))
  );

  return(
    <div id="sub-list" className="three-d">
      <h5>Your Subreddits</h5>
      <div className="hr"></div>
      { _renderSubs() }
    </div>
  );
};
