import React from 'react'
import {
  Header,
  Icon,
  Card,
  Image
} from "semantic-ui-react";
import "./details.content.styles.css";


const JobDescription = ({
  jobTitle,
  jobLocation,
  companyName,
  aboutCompany,
  companyLogo,
}) => {
  return (
    <Card fluid>
      <Card fluid>
        <Card.Content>
          <Header.Content>
            <Header.Subheader>
              <Image size="mini" circular src={companyLogo} />
              <span> {jobTitle}</span>
              <Icon float="right" name="arrow right" />
              <Header.Subheader>
                <div>
                  <Icon name="map marker alternate" size="small" />
                  <span> Remote</span>
                  <Icon className="home-icon" name="suitcase" size="small" />
                  <span className="icon-span"> Employee</span>
                </div>
              </Header.Subheader>
            </Header.Subheader>
          </Header.Content>
        </Card.Content>
      </Card>
    </Card>
  );
};

export default JobDescription
