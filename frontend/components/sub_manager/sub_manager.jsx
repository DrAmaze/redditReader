import React from 'react';
import SubSearchContainer from './sub_search/sub_search_container';
import SubListContainer from './sub_list/sub_list_container';
import Filters from './filters/filters_container';
import { Row, Column } from 'react-foundation';


export default () => (
    <Row id="sub-manager" className="display">
      <Column small={4} large={12}><SubSearchContainer /></Column>
      <Column small={4} large={12}><Filters /></Column>
      <Column small={4} large={12}><SubListContainer /></Column>
    </Row>
);
