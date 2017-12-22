import { connect } from 'react-redux';
import Feed from './feed';
import { listingsInView } from '../selectors';
import { requestMoreListings } from '../../actions/feed_actions';

const mapStateToProps = state => ({
  listings: listingsInView(state),
  loading: state.feed.loading
});

const mapDispatchToProps = {
  requestMoreListings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
