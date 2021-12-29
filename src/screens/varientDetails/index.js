import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import VarientDetailsComponent from "./varientDetails";

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({  }, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps)(VarientDetailsComponent);