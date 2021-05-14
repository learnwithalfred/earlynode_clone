import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      page not found
      <br />
      <Link to="/">Go to home page</Link>
    </>
  );
};

export default PageNotFound;
