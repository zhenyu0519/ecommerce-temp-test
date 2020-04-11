import React from "react";
// components
import Item from "../collections-item/Item";
// style
import { CollectionPreviewContainer, Title, PreviewItemContainer } from "./PreviewStyle.jsx";

export default function Preview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <PreviewItemContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </PreviewItemContainer>
    </CollectionPreviewContainer>
  );
}
