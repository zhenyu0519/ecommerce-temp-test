import React from "react";
// route
import { Route } from "react-router-dom";
// components
import Overview from "../../components/collections-overview/Overview";
import CollectionPage from "../collection-page/CollectionPage";

function ShopPage({ match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={Overview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}
export default ShopPage;
