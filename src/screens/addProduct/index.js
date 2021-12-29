import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddProductComponent from "./addProduct";

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({  }, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps)(AddProductComponent);