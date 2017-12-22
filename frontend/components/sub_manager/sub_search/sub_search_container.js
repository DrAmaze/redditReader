import { connect } from 'react-redux';
import SubSearch from './sub_search';
import { requestSubs, clearSearch } from '../../../actions/sub_search_actions';
import { addSub } from '../../../actions/sub_list_actions';

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
)(SubSearch);
