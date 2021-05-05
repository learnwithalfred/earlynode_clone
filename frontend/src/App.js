// import "bootstrap/dist/css/bootstrap.min.css";
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

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/job/new" component={NewJob} />
          <Route path="/details" component={CourseDetails} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
