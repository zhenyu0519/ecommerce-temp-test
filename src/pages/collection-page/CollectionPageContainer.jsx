// redux
import { connect } from "react-redux";
import { compose } from "redux";
import { selectCollectionsIsLoad } from "../../redux/shop/shopSelector";
// reselect
import { createStructuredSelector } from "reselect";
// components
import CollectionPage from "./CollectionPage";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsIsLoad(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
