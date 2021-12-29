import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CreateProductComponent from "./createProduct";

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({  }, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps)(CreateProductComponent);