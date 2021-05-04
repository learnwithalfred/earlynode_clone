import React from "react";
import {
  Button,
  Divider,
  Checkbox,
  Form,
  Menu,
  Input,
  Label,
  Header,
} from "semantic-ui-react";
import "./forms.styles.css";
import Avator from "./avator";

const FormExampleForm = () => (
  <div className="contact-form">
    <div className="card-color-seperation">
      <Form>
        <Avator />
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Field>
          <label>Phone</label>
          <input type="tel" placeholder="Phone" />
        </Form.Field>

        <Menu pointing secondary>
          Document
          <Menu.Menu position="right">.doc, .docx, .pdf, .rtf, .txt</Menu.Menu>
        </Menu>
        <Form.Field>
          <Label fluid> CV</Label>
          <input type="file" />
        </Form.Field>
        <Form.Field>
          <Label fluid> cover letter</Label>
          <input type="file" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button color="blue" fluid type="submit">
          Apply Now
        </Button>
      </Form>
      <Divider clearing />

      <Header as="h5">
        Already applied?
        <span>
          <br />
          Check the status of your application
        </span>
      </Header>

      <Divider clearing />

      <Header as="h5">Share this job:</Header>
      <div>
        <Button href="/" circular color="" icon="mail" />
        <Button href="/" circular color="facebook" icon="facebook messenger" />
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

export default FormExampleForm;
