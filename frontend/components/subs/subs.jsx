import React from 'react';
import { Row, Column } from 'react-foundation';

import SearchContainer from './search/searchContainer';
import SubListContainer from './subList/subListContainer';
import Filters from './filters/filtersContainer';


export default () => (
  <Row id="sub-manager" className="display">
    <Column small={4} large={12}><SearchContainer /></Column>
    <Column small={4} large={12}><Filters /></Column>
    <Column small={4} large={12}><SubListContainer /></Column>
  </Row>
);
