import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";
// route
import { Route } from "react-router-dom";
// components
import OverviewContainer from "../../components/collections-overview/OverviewContainer";
import CollectionPageContainer from "../../pages/collection-page/CollectionPageContainer";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={OverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
