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

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={Overview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
