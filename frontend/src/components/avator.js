import React from "react";
import { Header, Image } from "semantic-ui-react";

const HeaderExampleImage = () => (
  <Header as="h2">
    <Image
      circular
      spaced="left"
      size="massive"
      src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
    />
    <Header.Content>
      Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
      <Header.Subheader>Manage your preferences</Header.Subheader>
    </Header.Content>
  </Header>
);

export default HeaderExampleImage;
