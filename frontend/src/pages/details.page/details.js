import React from "react";
import "./details.styles.css";
import ContactForm from "../../components/contact-form";
import Footer from "../../components/footer";
import MainContent from "../../components/details.content";
import TermsAndConditions from "../../components/terms.and.conditions";

const DetailsPage = (props) => {
  return (
    <>
      <main className="container">
        <div className="header"></div>
        <div className="content">
          <MainContent jobs={props.jobs} />
        </div>
        <div className="contact-form">
          <ContactForm addApplicationHandler={props.addApplicationHandler} />
        </div>
        <div className="footer">
          <Footer />
          <TermsAndConditions />
        </div>
      </main>
    </>
  );
};

export default DetailsPage;
