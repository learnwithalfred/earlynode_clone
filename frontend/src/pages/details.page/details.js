import React from "react";
import "./details.styles.css";
import ContactForm from "../../components/contact-form";
import Footer from "../../components/footer";
import MainContent from "../../components/details.content";

const DetailsPage = () => {
  return (
    <>
      <main className="container">
        {/* header starts here */}
        <div className="header"></div>
        {/* header starts here */}

        {/* page content start here */}
        <div className="content">
         <MainContent/>
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
