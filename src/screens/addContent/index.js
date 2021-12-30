import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddContentComponent from "./addContent";
import { getContentFilters } from "../../redux/actions/get";
import { contentUpload } from "../../redux/actions/post";
import { SetBrand, setBrandsList } from "../../redux/actions/state";

const mapStateToProps = (state) => ({
  brandsList: state.state.brandsList,
  contentFilters: state.get.contentFilters,
  activeBrand: state.state.activeBrand,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getContentFilters, SetBrand, setBrandsList, contentUpload }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContentComponent);
