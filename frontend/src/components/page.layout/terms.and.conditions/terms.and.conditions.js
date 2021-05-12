import React from "react";
import { Link } from "react-router-dom";
import "./terms.and.conditions.css";
const Terms = () => {
  return (
    <>
      <hr />
      <div className="terms-and-conditions">
        <Link to="/"> Terms & Conditions </Link>
        <Link to="/" className="span2">
          Privacy Policy
        </Link>
      </div>
    </>
  );
};

export default Terms;
