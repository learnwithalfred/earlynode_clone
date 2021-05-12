import React from "react";
import { Link } from "react-router-dom";
import Avator from "./avator";
import {
  Header,
  Icon,
  Divider,
  List,
  Card,
  Grid,
  Menu,
  Button,
} from "semantic-ui-react";
import "./details.content.styles.css";

const content = (props) => {
  const {
    aboutCompany,
    companyName,
    jobLocation,
    companyLogo,
    jobDescription,
    jobTitle,
    benefits,
    task,
    requirement,
  } = props.job;

  return (
    <div>
      <Avator img={companyLogo} mainText={companyName} />
      <div>
        <Header as="h1">
          {jobTitle}
          <span className="small-span">new</span>
        </Header>
        <div>
          <Icon name="map marker alternate" size="large" />
          <span> Remote</span>
          <Icon className="home-icon" name="suitcase" size="large" />
          <span className="icon-span"> {jobLocation}</span>
          <Icon className="home-icon" name="folder" size="large" />
          <span className="icon-span"> IT / Services</span>
        </div>
        <div className="job-short-description card-color-seperation">
          <p className="text-description"> {aboutCompany} </p>
          <p className="text-description">{jobDescription}</p>
        </div>
      </div>
      <div className="job-short-description">
        <Header size="large">Tasks</Header>
        <ul>
          {task && task.length > 1
            ? task.map((data) => {
                return <li key={data}>{data}</li>;
              })
            : "Details will be privided later"}
        </ul>
        <Header size="large">Requirements</Header>
        <h3>You have...</h3>
        {requirement && requirement.length > 1
          ? requirement.map((data) => {
              return <li key={data}>{data}</li>;
            })
          : "Details will be privided later"}

        <div style={{ marginTop: "50px" }}>
          <Header size="large">Benefits</Header>
          {benefits && benefits.length > 1
            ? benefits.map((data) => {
                return <li key={data}>{data}</li>;
              })
            : "Details will be privided later"}
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
          <div className="card-description-mini">
            <Card.Content>
              <Card.Header className="job-title">
                About {companyName}
              </Card.Header>
            </Card.Content>
            <Grid columns={2} padded="vertically">
              <Grid.Column>
                <Card.Description>{aboutCompany}</Card.Description>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item>
                    <List.Icon name="globe" />
                    <List.Content>{companyName}.com</List.Content>
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
              {jobLocation}
              <Menu.Menu position="right">
                <Button basic color="blue">
                  <Link to="/">
                    <Icon name="arrow left" />
                    Go Back
                  </Link>
                </Button>
              </Menu.Menu>
            </Menu>
          </div>
        </Card>

        <div className="card-container">
          <Card.Group>
            <Card fluid color="rgb(248,249,250)">
              <Card.Content>
                <Menu pointing secondary>
                  Our other open positions
                  <Menu.Menu position="right">
                    <Button basic color="blue">
                      {" "}
                      <a href="/"> View all open positions</a>
                    </Button>
                  </Menu.Menu>
                </Menu>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </div>
    </div>
  );
};

export default content;
