import { connect } from 'react-redux';
import SubList from './subList';
import { toggleSub, deleteSub } from '../../../actions/subredditActions';

const mapStateToProps = state => ({
  subList: state.subList
});

const mapDispatchToProps = {
  toggleSub,
  deleteSub
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubList);
