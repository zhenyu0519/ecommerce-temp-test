import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./directory.scss";
import SECTION_DATA from "./section_data";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTION_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
