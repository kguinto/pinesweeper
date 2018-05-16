import { connect } from 'react-redux';
import { revealCell } from '../actions/actions';
import Cell from '../components/Cell';

const mapDispatchToProps = dispatch => ({
  revealCell: (row, column) => dispatch(revealCell(row, column)),
});

export default connect(() => ({}), mapDispatchToProps)(Cell);
