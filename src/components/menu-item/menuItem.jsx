import React from "react";
import "./menuItem.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    // history props is from withRouter
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
