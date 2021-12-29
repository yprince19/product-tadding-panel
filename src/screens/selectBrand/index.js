import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SelectBrandComponent from "./selectBrand";
import { SetBrand } from "../../redux/actions/state";

const mapStateToProps = state => ({
  activeBrand: state.state.activeBrand
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ SetBrand }, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps)(SelectBrandComponent);