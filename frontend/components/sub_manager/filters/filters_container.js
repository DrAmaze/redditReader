import { connect } from 'react-redux';
import Filters from './filters';
import { setFilter } from '../../../actions/filter_actions.js';

const mapStateToProps = state => ({
  selected: state.filter
});

const mapDispatchToProps = {
  setFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
