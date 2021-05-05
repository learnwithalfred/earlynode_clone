import React, { useEffect, useState } from "react";
import "./home.styles.css";
import JobDescription from "../../components/job.description";
import TermsAndCondtions from "../../components/terms.and.conditions";
import Footer from "../../components/footer";
import PageCard from "../../components/home.card";
import MainHeader from "../../components/header.main";
import api from "../../api";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  //fetch jobs from api
  const fetchJobs = async () => {
    const response = await api.get("/");
    return response.data;
  }; 

  useEffect(() => {
    const getAllJobs = async () => {
      const allJobs = await fetchJobs();
      if (allJobs) setJobs(allJobs);
    };
    getAllJobs();
  }, []);


  const addJobHandler = async (job) => {
    //console.log(job);
    const request = {
      id: Date.now(),
      ...job,
    };

    const response = await api.post("/", request);
    //console.log(response);
    setJobs([...jobs, response.data]);
  };






  return (
    <>
      <div className="home-container">
        <div className="content-body">
          <PageCard />
          <div className="main-page-content">
            <MainHeader />
            {jobs.map(({ id, ...rest }) => {
              return <JobDescription key={id} {...rest} />;
            })}

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
