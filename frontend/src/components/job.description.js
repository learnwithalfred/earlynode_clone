import React from 'react'
import {
  Header,
  Icon,
  Card,
} from "semantic-ui-react";
import "./details.content.styles.css";


const JobDescription =()=> {
    return (
      <Card fluid>
        <Card fluid>
          <Card.Content>
            <Header as="h2">
              <Icon name="settings" />
              <Header.Content>
                <Card.Description>
                  Business Journalist | Digital Media Company covering SaaS |
                  (m/w/d)
                </Card.Description>

                <Header.Subheader>
                  <div>
                    <Icon name="map marker alternate" size="small" />
                    <span> Remote</span>
                    <Icon className="home-icon" name="suitcase" size="small" />
                    <span className="icon-span"> Employee</span>
                  </div>
                </Header.Subheader>
              </Header.Content>
              <Icon float="right" name="arrow right" />
            </Header>
          </Card.Content>
        </Card>
      </Card>
    );
}

export default JobDescription
