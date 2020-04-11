import React from "react";
// redux
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
// reselect
import { createStructuredSelector } from "reselect";
// component
import MenuItem from "../menu-item/MenuItem";
// style
import { DirectoryMenuContainer } from "./DirectoryStyle.jsx";

function Directory({ sections }) {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
