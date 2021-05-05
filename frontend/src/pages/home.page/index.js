import React from "react";
import "./home.styles.css";
import JobDescription from "../../components/job.description";
import TermsAndCondtions from "../../components/terms.and.conditions";
import Footer from "../../components/footer";
import PageCard from "../../components/home.card";
import MainHeader from "../../components/header.main";

const Home = (props) => {
  const renderJobList = props.jobs.map(({ id, ...rest }) => {
    return <JobDescription {...rest} key={id} />;
  });

  return (
    <>
      <div className="home-container">
        <div className="content-body">
          <PageCard />
          <div className="main-page-content">
            <MainHeader />
            {/* joblist render goes here */}

            {renderJobList}
            <div className="footer-content">
              <Footer />
            </div>
            <div className="footer-content">
              <TermsAndCondtions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
