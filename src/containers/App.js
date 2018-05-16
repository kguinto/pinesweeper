import { connect } from 'react-redux';
import { initializeBoard } from '../actions/actions';
import App from '../components/App';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  initializeBoard: (rows, columns, mines) =>
    dispatch(initializeBoard(rows, columns, mines)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
