import React from "react";
import { Button, TextArea, Container, Header, Form } from "semantic-ui-react";

const newJob = () => (
  <Container fluid>
    <Header as="h2">add New job</Header>
    <Form>
      <Form.Group unstackable widths={2}>
        <Form.Input
          label="Company Name"
          name="companyName"
          placeholder="Company Name"
          //   value={}
          //   onChange={}
        />
        <Form.Input
          label="Company Logo"
          name="companyLogo"
          placeholder="Company Logo"
        />
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Input
          label="About Company"
          name="aboutCompany"
          placeholder="About Company"
        />
        <Form.Input
          label="Job Location"
          name="jobLocation"
          placeholder="Job Location"
        />
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Input
          label="Name Of Job"
          name="jobTitle"
          placeholder="Name Of Job"
        />
        <Form.Input
          label="Short Description"
          name="subDescription"
          placeholder="Short Description"
        />
      </Form.Group>

      <Form>
        <TextArea
          label="Full Description"
          name="fullDescription"
          placeholder="Full Description"
        />
      </Form>
      <Form>
        <TextArea label="benefits" name="benefits" placeholder="benefits" />
      </Form>
      <Form>
        <TextArea
          label="Qualifications"
          name="requirement"
          placeholder="Qualifications"
        />
      </Form>
      <Form>
        <TextArea
          label="What Applicant will Do"
          name="task"
          placeholder="What Applicant will Do"
        />
      </Form>
    </Form>

    <Form.Checkbox label="I agree to the Terms and Conditions" />
    <Button type="submit">Submit</Button>
  </Container>
);

export default newJob;
