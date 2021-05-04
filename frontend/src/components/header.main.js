import React from 'react'
import { Header} from "semantic-ui-react";
import "./header.main.css";
function HeaderMain() {
    return (
      <div className="main-header-container">
        <Header textAlign="center">
          <h2>Join the team</h2>
          <Header size="huge">We are looking for Talent</Header>
        </Header>
      </div>
    );
}

export default HeaderMain
