import React from 'react';
import { Provider } from 'react-redux';
import { Row, Column } from 'react-foundation';
import store from '../store.js';
import { initialize } from '../actions/feed_actions';
// Components
import FeedContainer from './feed/feed_container';
import SubManager from './sub_manager/sub_manager';
require('./_css/root');

const Root = () => (
  <Provider store={store}>
    <Row className="display">
      <Column small={12} large={3}><SubManager /></Column>
      <Column small={12} large={9}><FeedContainer /></Column>
    </Row>
  </Provider>
);

export default Root;
