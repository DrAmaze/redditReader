import { connect } from 'react-redux';
import SubList from './subList';
import { listingsInView } from '../selectors';
import { requestMoreListings } from '../../actions/feedActions';

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
)(SubList);
