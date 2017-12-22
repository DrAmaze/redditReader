import React from 'react';
require('../../../_css/filters');
require('../../../_css/three_d');
require('../../../_css/line');

const FILTERS = ["HOT", "NEW", "RISING"];

const Filters = ({ selected, setFilter }) => {

  const _handleChange = e => {
    setFilter(e.currentTarget.id);
  };

  // Creates all the buttons
  const _generateFilters = () => {
    return FILTERS.map( name => (
      <div key={name}>
        <input type="radio"
               name="filters"
               id={name}
               checked={name === selected}
               onChange={_handleChange}/>

        <label htmlFor={name} > { name } </label>
      </div>
    ));
  };

  return(
    <div id="filters" className="three-d">
      <h5>Filters</h5>
      <div className="hr"></div>
      { _generateFilters() }
    </div>
  );
};

export default Filters;
