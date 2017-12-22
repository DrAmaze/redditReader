import React from 'react';
import { bindAll } from 'lodash';

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
        <div onClick={this._handleClear}>
          Times Circle
        </div>
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
          Search
        </div>
        {this._renderResults()}
      </div>
    );
  }
}

export default SubSearch;
