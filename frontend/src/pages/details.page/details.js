import React from "react";
import "./details.styles.css";
import ContactForm from "../../components/contact-form";
import Footer from "../../components/footer";
import JobsDetailsContent from "../../components/details.content";
import TermsAndConditions from "../../components/page.layout/terms.and.conditions/terms.and.conditions";
import JobListCard from "../../components/job.description";

const DetailsPage = (props) => {
  const renderJobList = props.otherAvailableJobs
    .map((job) => {
      return <JobListCard job={job} key={job.id} />;
    })
    .slice(4, 7);

  return (
    <>
      <main className="container">
        <div className="header"></div>
        <div className="content">
          <JobsDetailsContent job={props.location.state.job} />

          {renderJobList}
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
