import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Preview from "../../components/collections-preview/Preview";
import { selectShopCollections } from "../../redux/shop/shopSelector";

function Shop({ collections }) {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollections }) => (
        <Preview key={id} {...otherCollections} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});
export default connect(mapStateToProps)(Shop);
