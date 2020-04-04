import React from "react";
// route
import { Route } from "react-router-dom";
// components
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import Collection from "../collection/Collection";

function Shop({ match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
}
export default Shop;
