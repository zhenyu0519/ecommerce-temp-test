import React from "react";
// redux
import { connect } from "react-redux";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
// components
import Preview from "../collections-preview/Preview";

import { CollectionOverviewContainer } from "./OverviewStyle.jsx";

const Overview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Preview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(Overview);
