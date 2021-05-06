import React from "react";
import "./avator.css";
import { Header, Image } from "semantic-ui-react";

const Avator = (props) => {
  return (
    <Header as="h2" className="avator-container">
      <div>
        <Image circular spaced="left" size="tiny" src={props.img} />
      </div>
      <div className="logo-splace">
        <Header.Content>{props.mainText}</Header.Content>
        <Header.Subheader>{props.subText}</Header.Subheader>
        <Header.Subheader>{props.teacmText}</Header.Subheader>
      </div>
    </Header>
  );
};
export default Avator;
