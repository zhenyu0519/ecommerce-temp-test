import React from "react";
// redux
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
// reselect
import { createStructuredSelector } from "reselect";
// component
import MenuItem from "../menu-item/MenuItem";

import "./directory.scss";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
