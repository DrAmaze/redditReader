import { connect } from 'react-redux';
import Search from './search';
import { requestSubs, clearSearch } from '../../../actions/subredditSearchActions';
import { addSub } from '../../../actions/subredditActions';

const mapStateToProps = state => ({
  subSearchResults: state.subSearchResults
});

const mapDispatchToProps = {
  requestSubs,
  addSub,
  clearSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
