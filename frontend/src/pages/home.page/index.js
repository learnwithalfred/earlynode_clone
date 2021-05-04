import React from "react";
import "./home.styles.css";
import JobDescription from "../../components/job.description";
import { Form} from "semantic-ui-react";
import TermsAndCondtions from "../../components/terms.and.conditions";
import Footer from "../../components/footer";
import PageCard from "../../components/home.card";
import MainHeader from "../../components/header.main"

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="content-body">
          <PageCard />
        <div className="main-page-content">
         
         
         
         <MainHeader />
         
            <Form>
              <Form.Group widths="equal">
                <Form.Select
                  fluid
                  label="First name"
                  options={options}
                  placeholder="All Categories"
                />
                <Form.Select
                  fluid
                  label="Last name"
                  options={options}
                  placeholder="All locations"
                />
              </Form.Group>
            </Form>
            <JobDescription />
            <JobDescription />

            <JobDescription />

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
