import React, { useState } from "react";
import ApplicationsList from "../../components/applications.list";
import {
  Button,
  TextArea,
  Container,
  Header,
  Form,
  Table,
} from "semantic-ui-react";

const NewJob = (props) => {
  //console.log("admin props", props)
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
    <Container fluid>
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
            label="Company Logo"
            name="companyLogo"
            placeholder="Company Logo"
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
        <Form>
          <TextArea
            label="benefits"
            name="benefits"
            placeholder="benefits"
            value={job.benefits}
            onChange={handleChange("benefits")}
          />
        </Form>
        <Form>
          <TextArea
            label="Qualifications"
            name="requirement"
            placeholder="Qualifications"
            value={job.requirement}
            onChange={handleChange("requirement")}
          />
        </Form>
        <Form>
          <TextArea
            label="What Applicant will Do"
            name="task"
            placeholder="What Applicant will Do"
            value={job.task}
            onChange={handleChange("task")}
          />
        </Form>
        <Button basic color="blue" fluid size="massive" type="submit">
          Create Job
        </Button>
      </Form>

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
