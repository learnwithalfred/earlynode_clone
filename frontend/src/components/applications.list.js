import React from "react";
import { Table } from "semantic-ui-react";

const ApplicationsList = ({
  email,
  firstName,
  lastName,
  phone,
  coverLetter,
}) => {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          {firstName} {lastName}
        </Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>{phone}</Table.Cell>
        <Table.Cell>{coverLetter.slice(0, 60)} . . .</Table.Cell>
      </Table.Row>
    </>
  );
};

export default ApplicationsList;
