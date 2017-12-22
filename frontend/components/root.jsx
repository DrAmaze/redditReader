import React from 'react';
import { Provider } from 'react-redux';
import { Row, Column } from 'react-foundation';
import store from '../store.js';
import { initialize } from '../actions/feedActions';

// Components
import FeedContainer from './feed/feedContainer';
import SubManager from './subs/subManager';
require('./_css/root');

const Root = () => (
  <Provider store={store}>
    <Row className="display">
      <Column small={10} large={3}><SubManager /></Column>
      <Column small={10} large={9}><FeedContainer /></Column>
    </Row>
  </Provider>
);

export default Root;
