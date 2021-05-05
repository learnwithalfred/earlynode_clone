import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home.page";
import CourseDetails from "./pages/details.page/details";
import NotFoundPage from "./pages/404.page/404.Page";
import NewJob from "./pages/create.job/job.new";
import api from "./api";
import React, { useEffect, useState } from "react";


const App = () => {
  const [jobs, setJobs] = useState([]);


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
      const request = {
        id: Date.now(),
        ...job,
      };

      const response = await api.post("/", request);
      setJobs([...jobs, response.data]);
    };









  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} jobs={jobs} />}
          />
          <Route
            path="/job/new"
            render={(props) => (
              <NewJob {...props} addJobHandler={addJobHandler} />
            )}
          />
          <Route path="/details" component={CourseDetails} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
