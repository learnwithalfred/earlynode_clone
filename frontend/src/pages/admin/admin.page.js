import React, { useState } from "react";
import ApplicationsList from "../../components/applications.list";
import {
  Button,
  TextArea,
  Container,
  Header,
  Form,
  Table,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const NewJob = (props) => {
  const initialState = {
    companyName: "",
    companyLogo: "",
    aboutCompany: "",
    jobLocation: "",
    jobTitle: "",
    subDescription: "",
    fullDescription: "",
    requirement: "",
    task: "",
  };

  const [job, SetJobs] = useState(initialState);

  const handleChange = (name) => (event) => {
    SetJobs({ ...job, [name]: event.target.value, id: Date.now });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addJobHandler(job);
    SetJobs(initialState);
    props.history.push("/");
  };

  const renderApplications = props.applications.map(({ id, ...rest }) => {
    return <ApplicationsList key={id} {...rest} />;
  });

  return (
    <Container>
      <div>
        <Header as="h1">Admin Page</Header>
        <Link to="/">
          <Icon name="arrow alternate circle left" /> Go Back
        </Link>
      </div>

      <div className="create-job-form">
        <Header as="h2">Create New job</Header>

        <Form onSubmit={handleSubmit}>
          <Form.Group unstackable widths={2}>
            <input
              required
              label="Company Name"
              name="companyName"
              placeholder="Company Name"
              value={job.companyName}
              onChange={handleChange("companyName")}
            />
            <input
              label="Company Logo URL"
              name="companyLogo"
              placeholder="Company Logo url"
              value={job.companyLogo}
              onChange={handleChange("companyLogo")}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <input
              label="About Company"
              name="aboutCompany"
              placeholder="About Company"
              value={job.aboutCompany}
              onChange={handleChange("aboutCompany")}
            />
            <input
              label="Job Location"
              name="jobLocation"
              placeholder="Job Location"
              value={job.jobLocation}
              onChange={handleChange("jobLocation")}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <input
              label="Name Of Job"
              name="jobTitle"
              placeholder="Name Of Job"
              value={job.jobTitle}
              onChange={handleChange("jobTitle")}
            />
            <input
              label="Short Description"
              name="subDescription"
              placeholder="Short Description"
              value={job.subDescription}
              onChange={handleChange("subDescription")}
            />
          </Form.Group>

          <Form>
            <TextArea
              label="Full Description"
              name="fullDescription"
              placeholder="Full Description"
              value={job.fullDescription}
              onChange={handleChange("fullDescription")}
            />
          </Form>
          <Button
            style={{ marginTop: "20px" }}
            primary
            fluid
            size="big"
            type="submit"
          >
            Add New Job
          </Button>
        </Form>
      </div>

      {/* here is how we render our applications form */}
      <h1>Received Applications</h1>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Cover Letter</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{renderApplications}</Table.Body>
      </Table>
    </Container>
  );
};

export default NewJob;
