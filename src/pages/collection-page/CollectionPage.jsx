import React from "react";
// redux
import { connect } from "react-redux";
// reselect
import { selectCollection } from "../../redux/shop/shopSelector";
// components
import Item from "../../components/collections-item/Item";
// style
import {
  CollectionItem,
  CollectionPageContainer,
  CollectionTitle,
} from "./CollectionPageStyle.jsx";

function CollectionPage({ collection }) {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItem>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </CollectionItem>
    </CollectionPageContainer>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
