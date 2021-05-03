import React from "react";
import "./details.styles.css";
import ContactForm from "../../components/contact-form";
import Avator from "../../components/avator";
import Footer from "../../components/footer";

const DetailsPage = () => {
  return (
    <>
      <main className="container">
        {/* header starts here */}
        <div className="header"></div>
        {/* header starts here */}

        {/* page content start here */}
        <div className="content">
          <div>
            <Avator />
            <div>
              <h1>
                Business Journalist | Editor-in-Chief | Digital Media Company
                covering SaaS | (m/w/d)<span className="small-span">new</span>
              </h1>
            </div>
          </div>
        </div>
        {/* page content ends here */}

        {/* constact form start here */}
        <div className="contact-form">
          <ContactForm />
        </div>
        {/* contact form ends here */}

        {/* footer goes here */}
        <div className="footer">
          <Footer />
        </div>
        {/* footer end here */}
      </main>
    </>
  );
};

export default DetailsPage;
