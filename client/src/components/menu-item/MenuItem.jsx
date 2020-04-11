import React from "react";
// route
import { withRouter } from "react-router-dom";
// style
import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./MenuItemStyle.jsx";

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    // history props is from withRouter
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
