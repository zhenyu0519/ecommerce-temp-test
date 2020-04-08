import React, { Component } from "react";
// redux
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shopActions";
// route
import { Route } from "react-router-dom";
// firebase
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";
// components
import Overview from "../../components/collections-overview/Overview";
import CollectionPage from "../collection-page/CollectionPage";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(Overview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }
  render() {
    const { match } = this.props;
    const {loading}=this.state
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={loading}
              {...props}
            ></CollectionsOverviewWithSpinner>
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={loading}
              {...props}
            ></CollectionPageWithSpinner>
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
