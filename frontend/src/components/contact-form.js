import React, { useState } from "react";
import {
  Button,
  Divider,
  Checkbox,
  Form,
  Menu,
  Input,
  Label,
  TextArea,
  Header,
} from "semantic-ui-react";
import "./forms.styles.css";
import Avator from "./avator";

const ApplicationForm = (props) => {
  const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    coverLetter: "",
  };

  const [application, setApplications] = useState(initialState);

  const handleChange = (name) => (event) => {
    setApplications({
      ...application,
      [name]: event.target.value,
      id: Date.now,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addApplicationHandler(application);
    setApplications(initialState);
  };

  return (
    <div className="Application-form">
      <div className="card-color-seperation">
        <Form onSubmit={handleSubmit}>
          <h5>Intereted?</h5>
          <Avator
            img="https://cdn.join.com/5df3a3eaf184b40001ed0d6b/early-node-gmb-h-logo-xl.png"
            mainText="Ansprechperson"
            subText="Nikolas Chapoupis"
            teacmText="Recruiting Team"
          />
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={application.email}
              onChange={handleChange("email")}
              required
              name="email"
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="First name"
              required
              placeholder="First name"
              value={application.firstName}
              onChange={handleChange("firstName")}
              name="firstName"
            />
            <Form.Field
              control={Input}
              label="Last name"
              placeholder="Last name"
              value={application.lastName}
              onChange={handleChange("lastName")}
              name="lastName"
            />
          </Form.Group>
          <Form.Field>
            <label>Phone</label>
            <input
            reuired
              value={application.phone}
              onChange={handleChange("phone")}
              name="phone"
              type="tel"
              placeholder="Phone"
            />
          </Form.Field>

          <Menu pointing secondary>
            Document
            <Menu.Menu position="right">
              .doc, .docx, .pdf, .rtf, .txt
            </Menu.Menu>
          </Menu>
          <Form.Field>
            <Label fluid> CV</Label>
            <input type="file" />
          </Form.Field>
          <Form.Field>
            <Label fluid> cover letter</Label>
            <input type="file" />
          </Form.Field>
          <TextArea
            value={application.coverLetter}
            onChange={handleChange("coverLetter")}
            name="coverLetter"
            placeholder="Tell us Why You What To Apply"
          />
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button basic color="blue" fluid type="submit">
            Apply Now
          </Button>
        </Form>
        {/* <Divider clearing />

        <Header as="h5">
          Already applied?
          <span>
            <br />
            Check the status of your application
          </span>
        </Header> */}

        <Divider clearing />

        <Header as="h5">Share this job:</Header>
        <div>
          <Button href="/" circular color="" icon="mail" />
          <Button
            href="/"
            circular
            color="facebook"
            icon="facebook messenger"
          />
          <Button href="/" circular color="twitter" icon="twitter" />
          <Button href="/" circular color="linkedin" icon="linkedin" />
          <Button href="/" circular color="green" icon="whatsapp" />
        </div>
      </div>

      {/* division goes here */}
      <div className="card-color-seperation">
        <Header
          as="h2"
          content="No time? Just apply later"
          subheader="Enter your info below to get a link to this job."
        />
        <Input
          fluid
          action={{ color: "blue", content: "Send" }}
          placeholder="Email"
        />
      </div>
    </div>
  );
};

export default ApplicationForm;
