import React, { Component } from "react";
import SHOP_DATA from "./sample_data";
import Preview from "../collections-preview/Preview";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollections }) => (
          <Preview key={id} {...otherCollections} />
        ))}
      </div>
    );
  }
}
