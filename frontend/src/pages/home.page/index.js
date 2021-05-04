import React from "react";
import "./home.styles.css";
import { Grid, Menu, Form,Header, Icon, List } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];


const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="header-container"></div>
        <div className="content-body">
          <Grid columns={2} padded="vertically">
            <Grid.Column>
              <div>
                <Header as="h2" icon>
                  <Icon name="users" circular />
                  <Header.Content>EarlyNode GmbH</Header.Content>
                </Header>
                <List>
                  <List.Item icon="users" content="Semantic UI" />
                  <List.Item icon="marker" content="New York, NY" />
                  <List.Item
                    icon="mail"
                    content={
                      <a href="mailto:jack@semantic-ui.com">
                        jack@semantic-ui.com
                      </a>
                    }
                  />
                  <List.Item
                    icon="linkify"
                    content={
                      <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                    }
                  />
                </List>
              </div>
            </Grid.Column>
            <Grid.Column>
              <h2>Company Info</h2>
              <h4>
                Unsere Leidenschaften für Technologie und Innovation leben wir
                durch die Entwicklung eleganter Softwarelösungen und das
                Investieren in Firmen aus.
              </h4>
            </Grid.Column>
          </Grid>
          <Menu pointing secondary>
            <Icon name="map marker alternate" />
            Aachen, Deutschland
            <Menu.Menu position="right">
              Show map <Icon name="arrow down" />
            </Menu.Menu>
          </Menu>
          <div>
            <Header as="h3" icon textAlign="center">
              <Header.Content>Join the team</Header.Content>
              <h1>We are looking for Talent</h1>
            </Header>
          </div>
          <Form>
            <Form.Group widths="equal">
              <Form.Select
                fluid
                label="First name"
                options={options}
                placeholder="All Categories"
              />
              <Form.Select
                fluid
                label="Last name"
                options={options}
                placeholder="All locations"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Home;
