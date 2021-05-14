import React from "react";
import "./details.styles.css";
import ContactForm from "../../components/contact-form";
import Footer from "../../components/footer";
import JobsDetailsContent from "../../components/details.content";
import TermsAndConditions from "../../components/page.layout/terms.and.conditions/terms.and.conditions";
import JobListCard from "../../components/job.description";
import LoadingData from "../../components/loading";



const DetailsPage = (props) => {
  const renderJobList = props.otherAvailableJobs
    .map((job) => {
      return <JobListCard job={job} key={job.id} />;
    })
    .slice(1, 4);

  return (
    <>
      <main className="container">
        <div className="header"></div>
        <div className="content">
          <JobsDetailsContent job={props.location.state.job} />

          {renderJobList.length > 0 ? renderJobList : <LoadingData />}
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
