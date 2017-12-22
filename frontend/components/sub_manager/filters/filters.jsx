import React from 'react';
require('../../_css/filters');
require('../../_css/shared/three_d');
require('../../_css/shared/hr');

const FILTER_NAMES = ["HOT", "NEW", "RISING"];

const Filters = ({selected, setFilter}) => {

  const _handleChange = e => {
    setFilter(e.currentTarget.id);
  };

  // Creates all the radio buttons
  const _generateFilters = () => {
    return FILTER_NAMES.map( name => (
      <div key={name}>
        <input type="radio"
               name="filters"
               id={name}
               checked={name === selected}
               onChange={_handleChange}/>

        <label htmlFor={name} >{name}</label>
      </div>
    ))
  };

  return(
    <div id="filters" className="three-d">
      <h5>Filters</h5>
      <div className="hr"></div>
      {_generateFilters()}
    </div>
  );
}

export default Filters;
