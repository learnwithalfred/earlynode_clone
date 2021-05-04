import React from 'react'
import { Grid, Menu, Card, Header, Icon, List } from "semantic-ui-react";

const CardPage =() =>{
    return (
      <Card fluid>
        <Card.Content>
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
              <div className="comapany-info">
                <h2>Company Info</h2>
                <h4>
                  Unsere Leidenschaften für Technologie und Innovation leben wir
                  durch die Entwicklung eleganter Softwarelösungen und das
                  Investieren in Firmen aus.
                </h4>
              </div>
            </Grid.Column>
          </Grid>
        </Card.Content>
        <Card.Content extra>
          <Menu pointing secondary>
            <Icon name="map marker alternate" />
            Aachen, Deutschland
            <Menu.Menu position="right">
              Show map <Icon name="arrow down" />
            </Menu.Menu>
          </Menu>
        </Card.Content>
      </Card>
    );
}

export default CardPage;
