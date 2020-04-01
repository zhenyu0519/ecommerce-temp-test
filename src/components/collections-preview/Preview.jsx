import React from "react";
import "./preview.scss";
import Item from "../collections-item/Item";

export default function Preview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
