import React from "react";
// redux
import { connect } from "react-redux";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
// components
import Preview from "../collections-preview/Preview";

import "./overview.scss";

const Overview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Preview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(Overview);
