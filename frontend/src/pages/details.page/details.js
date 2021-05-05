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
        {/* header starts here */}
        <div className="header"></div>
        {/* header starts here */}

        {/* page content start here */}
        <div className="content">
          <MainContent jobs={props.jobs} />
        </div>
        {/* page content ends here */}

        {/* constact form start here */}
        <div className="contact-form">
          <ContactForm addApplicationHandler={props.addApplicationHandler} />
        </div>
        {/* contact form ends here */}

        {/* footer goes here */}
        <div className="footer">
          <Footer />
          <TermsAndConditions />
        </div>
        {/* footer end here */}
      </main>
    </>
  );
};

export default DetailsPage;
