import React from 'react';
import { bindAll } from 'lodash';
import FontAwesome from 'react-fontawesome';
require('../../_css/sub_search');
require('../../_css/shared/three_d');
require('../../_css/shared/exit');

class SubSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {query: ""};
    bindAll(this, "_handleChange", "_addSub", "_handleClear");
  }

  // Event handlers
  _handleChange(e){
    const query = e.currentTarget.value;
    this.setState({query});
    this.props.requestSubs(query);
  }

  _handleClear(){
    this.setState({query: ""});
    this.props.clearSearch();
  }

  // Render helpers
  _renderSubList(){
    return this.props.subSearchResults.map(
      subName => <li key={subName} data-sub-name={subName}>{subName}</li>
    );
  }

  _addSub(e){
    this.props.addSub(e.target.dataset.subName);
  }

  _renderResults(){
    if(this.props.subSearchResults.length === 0){ return; }
    return (
      <div id="search-results" className="three-d">
        <FontAwesome name='times-circle' onClick={this._handleClear}/>
        <ul onClick={this._addSub}>
          {this._renderSubList()}
        </ul>
      </div>
    );
  }

  render(){
    return (
      <div id="sub-search">
        <div id="search-field-container">
          <input onChange={this._handleChange}
            value={this.state.query}
            placeholder="Find A Subreddit!"/>
          <FontAwesome name='search' />
        </div>
        {this._renderResults()}
      </div>
    );
  }
}

export default SubSearch;
