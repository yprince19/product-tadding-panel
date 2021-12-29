import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DisplayProductComponent from "./displayProduct";
import {
  getContentFilters,
  getContentList,
  getTagContent,
  getProducts,
} from "../../redux/actions/get";
import { postTagContent, postUnTagContent, postTrashContent } from "../../redux/actions/post";
import { setContentTypes, setTaggedData } from "../../redux/actions/state";

const mapStateToProps = (state) => ({
  contentFilters: state.get.contentFilters,
  tagProducts: state.get.tagProducts,
  contentList: state.get.contentList,
  activeContentTypes: state.state.activeContentTypes,
  activeBrand: state.state.activeBrand,
  taggedDataList: state.state.taggedDataList,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getContentFilters,
      getContentList,
      getTagContent,
      setContentTypes,
      postTagContent,
      postUnTagContent,
      getProducts,
      setTaggedData,
      postTrashContent,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayProductComponent);
