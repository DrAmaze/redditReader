import React from 'react';
import FontAwesome from 'react-fontawesome';
require('../../_css/sub_list');
require('../../_css/shared/three_d');
require('../../_css/shared/exit');
require('../../_css/shared/hr');

export default ({subList, toggleSub, deleteSub}) => {

  const _handleChange = e => {
    toggleSub(e.currentTarget.id);
  }

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
        <FontAwesome name='times-circle' onClick={_handleDelete(sub.name)}/>
      </div>
    ))
  );

  return(
    <div id="sub-list" className="three-d">
      <h5>Your Subs</h5>
      <div className="hr"></div>
      {_renderSubs()}
    </div>
  )
};
