import React from "react";
// redux
import { connect } from "react-redux";
// reselect
import { selectCollection } from "../../redux/shop/shopSelector";
// components
import Item from "../../components/collections-item/Item";
import "./collectionPage.scss";

function CollectionPage({ collection }) {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
