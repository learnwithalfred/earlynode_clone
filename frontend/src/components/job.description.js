import React from "react";
import { Header, Icon, Card, Image } from "semantic-ui-react";
import "./details.content.styles.css";
import { Link } from "react-router-dom";


const JobDescription = (props) => {
  console.log(props, "job deatials sending ocntent");
  const {
    id,
    jobTitle,
    companyLogo,
  } = props.job;
  return (
    <Card fluid>
      <Card fluid>
        <Card.Content>
          <Header.Content>
            <Header.Subheader className="card-content-container">
              <div>
                <Image size="mini" circular src={companyLogo} />
              </div>
              <div className="card-content-item">
                <Link
                  to={{ pathname: `/jobs/${id}`, state: { job: props.job } }}
                >
                  <span className="job-title"> {jobTitle}</span>
                </Link>
                <Header.Subheader>
                  <div>
                    <Icon name="map marker alternate" size="small" />
                    <span> Remote</span>
                    <Icon className="home-icon" name="suitcase" size="small" />
                    <span className="icon-span"> Employee</span>
                  </div>
                </Header.Subheader>
              </div>
            </Header.Subheader>
          </Header.Content>
        </Card.Content>
      </Card>
    </Card>
  );
};

export default JobDescription;
