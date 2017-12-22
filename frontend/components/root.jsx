import React from 'react';
import { Provider } from 'react-redux';
import { Row, Column } from 'react-foundation';
import store from '../store.js';
import { initialize } from '../actions/feedActions';

// Components
import FeedContainer from './feed/subListContainer';
import Subs from './subs/subs';

const Root = () => (
  <Provider store={store}>
    <Row className="display">
      <Column small={10} large={3}><Subs /></Column>
      <Column small={10} large={9}><FeedContainer /></Column>
    </Row>
  </Provider>
);

export default Root;
