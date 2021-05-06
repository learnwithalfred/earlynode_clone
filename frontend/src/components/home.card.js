import React from "react";
import { Grid, Card, Header, Button, Icon, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./home.card.css";
const CardPage = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Grid columns={2} padded="vertically">
          <Grid.Column>
            <div>
              <Header as="h2">
                <img
                  src="https://cdn.join.com/5df3a3eaf184b40001ed0d6b/early-node-gmb-h-logo-xl.png"
                  alt=""
                  style={{ backgroudColor: "blue", borderRadius: "50%" }}
                />
                <h2>EarlyNode GmbH</h2>
              </Header>
              <List>
                <List.Item
                  icon="globe"
                  content={<a href="/">earlynode.com </a>}
                />
                <List.Item
                  icon="folder"
                  content="Information Technology (IT)"
                />
                <List.Item icon="group" content="2-10 employees" />
              </List>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="comapany-info">
              <h2>Company Info</h2>
              <h4 className="card-content">
                Unsere Leidenschaften für Technologie und Innovation leben wir
                durch die Entwicklung eleganter Softwarelösungen und das
                Investieren in Firmen aus.
              </h4>
            </div>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content extra>
        <div className="card-links">
          <div>
            <Icon name="map marker alternate" />
            Aachen, Deutschland
          </div>
          <div className="admin-go">
            <Link to="/admin">
              {" "}
              <Button basic color="blue">
                Go To Admin Dashboard
                <Icon name="arrow right" />
              </Button>
            </Link>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CardPage;
