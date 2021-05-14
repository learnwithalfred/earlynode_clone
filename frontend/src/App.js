import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home.page";
import CourseDetails from "./pages/details.page/details";
//import NotFoundPage from "./pages/404.page/404.Page";
import Admin from "./pages/admin/admin.page";
import api from "./api";
import React, { useEffect, useState } from "react";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  //jobs goes here
  const fetchJobs = async () => {
    const response = await api.get("/jobs");
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
    const request = {
      id: Date.now(),
      ...job,
    };

    const response = await api.post("/jobs", request);
    setJobs([...jobs, response.data]);
  };

  //applications goes here

  //load all applications
  const fetchApplications = async () => {
    const response = await api.get("/application");
    return response.data;
  };

  useEffect(() => {
    const getAllApplications = async () => {
      const allApplications = await fetchApplications();
      if (allApplications) setApplications(allApplications);
    };
    getAllApplications();
  }, []);

  //post application

  const addApplicationHandler = async (application) => {
    const request = {
      ...application,
    };

    const response = await api.post("/application", request);
    setApplications([...applications, response.data]);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/admin"
            render={(props) => (
              <Admin
                {...props}
                addJobHandler={addJobHandler}
                applications={applications}
              />
            )}
          />
          <Route
            path="/jobs/:id"
            render={(props) => (
              <CourseDetails
                {...props}
                otherAvailableJobs={jobs}
                addApplicationHandler={addApplicationHandler}
              />
            )}
          />
          <Route path="/" render={(props) => <Home {...props} jobs={jobs} />} />
          {/* <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
