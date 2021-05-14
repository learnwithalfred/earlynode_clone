import React from "react";
import "./home.styles.css";
import JobDescription from "../../components/job.description";
import TermsAndCondtions from "../../components/page.layout/terms.and.conditions/terms.and.conditions";
import Footer from "../../components/footer";
import PageCard from "../../components/home.card";
import MainHeader from "../../components/page.layout/header/header.main";
import CategoriesForm from "../../components/simple.form";
import LoadingData from "../../components/loading";

const Home = (props) => {
  const renderJobList = props.jobs.map((job) => {
    return <JobDescription job={job} key={job.id} />;
  });

  return (
    <>
      <div className="home-container">
        <div className="content-body">
          <PageCard />
          <div className="main-page-content">
            <MainHeader />
            <div className="center-content-in">
              <div className="category-form">
                <CategoriesForm />
              </div>
              {renderJobList.length > 0 ? renderJobList : <LoadingData />}
            </div>
          </div>
        </div>
        <div className="footer-content">
          <Footer />
        </div>
        <div className="footer-content">
          <TermsAndCondtions />
        </div>
      </div>
    </>
  );
};

export default Home;
