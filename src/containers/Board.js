import { connect } from 'react-redux';
import Board from '../components/Board';

const mapStateToProps = ({ board }) => ({ board });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
