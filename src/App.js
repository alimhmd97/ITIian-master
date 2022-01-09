import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../src/pages/home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AboutTracks from "../src/components/aboutTracks/AboutTracks";
import AboutTrack from "../src/components/aboutTrack/AboutTrack";
import Profile from "../src/components/profile/Profile";
import Jobs from "../src/components/Jobss/Jobs";
import AdminHome from "../src/components/Admin/AdminHome";
import MessagesPage from "../src/components/messeges/MessagesPage";
// import MainLayout from "./shared/layout/MainLayout";
import PrivateRoute from "./context/PrivateRouth";
import Footer from "../src/shared/layout/footer/Footer";
import Navbar from "../src/shared/layout/navbar/Navbar";
import MyTrackPage from "./components/myTrackPage/MyTrackPage";
import UserProfile from "./components/userProfile/UserProfile";

// import TestFeed from "../src/components/TestFeed";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminUsers from "./components/Admin/AdminUsers";
import AdminTracks from "./components/Admin/AdminTracks";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />{" "}
            <Route path="/login" component={Login} />{" "}
            <Route path="/register" component={Register} />{" "}
            <PrivateRoute path="/about" component={AboutTracks} />{" "}
            <PrivateRoute path="/track" component={AboutTrack} />{" "}
            <PrivateRoute path="/Profile" component={Profile} />{" "}
            <PrivateRoute path="/AdminHome" component={AdminHome} />{" "}
            <PrivateRoute path="/Jobs" component={Jobs} />{" "}
            <PrivateRoute path="/1" component={UserProfile} />{" "}
            <PrivateRoute path="/AdminLogin" component={AdminLogin} />{" "}
            <PrivateRoute path="/AdminUsers" component={AdminUsers} />{" "}
            <PrivateRoute path="/AdminTracks" component={AdminTracks} />{" "}
            <PrivateRoute path="/MyTrackPage" component={MyTrackPage} />{" "}
            {/* <PrivateRoute path="/TestFeed" component={TestFeed} />{" "} */}{" "}
            <PrivateRoute path="/MessagesPage" component={MessagesPage} />{" "}
          </Switch>{" "}
          <Footer />{" "}
        </Router>{" "}
      </div>{" "}
    </>
  );
}

export default App;
