import React from "react";
import Avator from "./avator";
import {
  Header,
  Icon,
  Divider,
  List,
  Card,
  Grid,
  Menu,
} from "semantic-ui-react";
import "./details.content.styles.css";
import JobDescription from "./job.description";

function content() {
  return (
    <div>
      <Avator />
      <div>
        <Header as="h1">
          Business Journalist | Editor-in-Chief | Digital Media Company covering
          SaaS | (m/w/d)<span className="small-span">new</span>
        </Header>
        <div>
          <Icon name="map marker alternate" size="large" />
          <span> Remote</span>
          <Icon className="home-icon" name="suitcase" size="large" />
          <span className="icon-span"> Angestellter</span>
          <Icon className="home-icon" name="folder" size="large" />
          <span className="icon-span"> IT / Services</span>
        </div>
        <div className="job-short-description card-color-seperation">
          <p className="text-description">
            EarlyNode is a company builder with a focus on spinning out SaaS and
            Marketplace Startups.
          </p>
          <p className="text-description">
            Now we are not only launching our own media arm but a separate
            digital media company with the ambition to build the Nr.1
            publication covering all things Software-as-a-Service. We want to
            build our version of Forbes for SaaS Entrepreneurs, Investors, and
            Executives.
          </p>
        </div>
      </div>
      <div className="job-short-description">
        <Header size="large">Tasks</Header>
        <h3>Your task</h3>
        <ul>
          <li>being Editor-in-Chief as well as the first journalist</li>
          <li>building the content strategy and building the content team</li>
          <li>producing content and doing original reporting</li>
        </ul>
        <Header size="large">Requirements</Header>
        <h3>You have...</h3>
        <li>more than 3 years of experience in business media publications</li>
        <li>strong interest in SaaS</li>
        <li>Strong interest in building community</li>
        <li>
          Strong communication skills in English, both written and verbal
        </li>{" "}
        <li>
          Strong organizational skills, personal responsibility, and ambition
        </li>
        <p>Ideal (not mandatory):</p>
        <p>Experience as a founder or early/early employee in a startup.</p>
        <div>
          <Header size="large">Requirements</Header>
          <li>100% remote</li>
          <li>working with an international team</li>
          <li>
            personal growth in challenges and various opportunities for further
            training in all areas of the company
          </li>
        </div>
        <Divider clearing />
        <List horizontal link>
          <List.Item as="a">
            <List.Header> Updated: 7 days ago</List.Header>
          </List.Item>
          <List.Item as="a">
            <List.Header> Job ID: 2187558</List.Header>
          </List.Item>
        </List>
      </div>

      <div className="card-container card-color-seperation">
        <Card fluid color="rgb(248,249,250)">
          <Card.Content>
            <Card.Header>About EarlyNode GmbH</Card.Header>
          </Card.Content>
          <Grid columns={2} padded="vertically">
            <Grid.Column>
              <Card.Description>
                EarlyNode GmbH logo Business Journalist | Digital Media Company
                covering SaaS | (m/w/d)
              </Card.Description>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>
                  <List.Icon name="globe" />
                  <List.Content>earlynode.com</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="group" />
                  <List.Content>2-10 Mitarbeiter</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="folder" />
                  <List.Content>
                    Informationstechnologie (IT) & Software
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
          <Menu pointing secondary>
            <Icon name="map marker alternate" />
            Aachen, Deutschland
            <Menu.Menu position="right">
              Show map <Icon name="arrow down" />
            </Menu.Menu>
          </Menu>
        </Card>

        <div className="card-container">
          <Card.Group>
            <Card fluid color="rgb(248,249,250)">
              <Card.Content>
                <Menu pointing secondary>
                  Our other open positions
                  <Menu.Menu position="right">
                    View all open positions
                  </Menu.Menu>
                </Menu>

                <JobDescription />


              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </div>
    </div>
  );
}

export default content;
