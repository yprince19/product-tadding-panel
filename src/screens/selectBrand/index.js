import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SelectBrandComponent from "./selectBrand";
import { SetBrand, setBrandsList } from "../../redux/actions/state";

const mapStateToProps = state => ({
  activeBrand: state.state.activeBrand,
  brandsList: state.state.brandsList,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ SetBrand, setBrandsList }, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps)(SelectBrandComponent);