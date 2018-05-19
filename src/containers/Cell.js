import { connect } from 'react-redux';
import { revealCell, flagCell } from '../actions/actions';
import Cell from '../components/Cell';

const mapDispatchToProps = dispatch => ({
  revealCell: (row, column) => dispatch(revealCell(row, column)),
  flagCell: (row, column) => dispatch(flagCell(row, column)),
});

export default connect(() => ({}), mapDispatchToProps)(Cell);
