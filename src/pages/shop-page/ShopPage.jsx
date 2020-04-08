import React, { Component } from "react";
// reselct
import { createStructuredSelector } from "reselect";
// redux
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";
import {
  selectCollectionIsFetching,
  selelctCollectionsIsLoad,
} from "../../redux/shop/shopSelector";
// route
import { Route } from "react-router-dom";
// components
import Overview from "../../components/collections-overview/Overview";
import CollectionPage from "../collection-page/CollectionPage";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(Overview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionIsFetching,
  isCollectionLoaded: selelctCollectionsIsLoad,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
