import React from "react";

import { HomePageConainer } from "./HomePageStyle";
import Directory from "../../components/directory/Directory";

const HomePage = () => (
  <HomePageConainer>
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </HomePageConainer>
);

export default HomePage;
