import React from 'react'
import {
  Header,
  Icon,
  Card,
  Image
} from "semantic-ui-react";
import "./details.content.styles.css";
import { Link } from "react-router-dom";


const JobDescription = ({
  id,
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
            <Link
              to={{
                pathname: `/jobs/{id}`,
              }}
            >
              <Header.Subheader>
                <Image size="mini" circular src={companyLogo} />
                <span> {jobTitle}</span>
                <Header.Subheader>
                  <div>
                    <Icon name="map marker alternate" size="small" />
                    <span> Remote</span>
                    <Icon className="home-icon" name="suitcase" size="small" />
                    <span className="icon-span"> Employee</span>
                  </div>
                </Header.Subheader>
              </Header.Subheader>
            </Link>
          </Header.Content>
        </Card.Content>
      </Card>
    </Card>
  );
};

export default JobDescription
