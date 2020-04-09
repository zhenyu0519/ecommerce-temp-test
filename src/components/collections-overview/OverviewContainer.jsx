// redux
import { compose } from "redux";
import { connect } from "react-redux";
import { selectCollectionsIsFetching } from "../../redux/shop/shopSelector";
// reselect
import { createStructuredSelector } from "reselect";
// component
import WithSpinner from "../with-spinner/WithSpinner";
import Overview from "./Overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsIsFetching,
});

const OverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Overview);

export default OverviewContainer;
