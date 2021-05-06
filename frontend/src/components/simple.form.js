import React from "react";
import { Form, Select } from "semantic-ui-react";

const categoriesOptions = [
  { key: "m", text: "All Categories", value: "All Categories" },
  { key: "f", text: "Finance", value: "female" },
  { key: "o", text: "IT / SOFTWARE", value: "other" },
  { key: "o", text: "MEDIA / COMMUNICATION", value: "other" },
  { key: "o", text: "OTHER", value: "other" },
];

const locationOptions = [
  { key: "m", text: "All Locations", value: "All Categories" },
  { key: "f", text: "Remote", value: "female" },
];

const FormInput = () => {
  return (
    <>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            control={Select}
            options={categoriesOptions}
            placeholder="All Categories"
            className="category-form"
          />
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-last-name"
            control={Select}
            options={locationOptions}
            placeholder="All Locations"
            className="category-form"
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default FormInput;
