import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Companies from "./pages/Companies";
import AboutUs from "./pages/AboutUs";
import SignOut from "./pages/SignOut";
import Core from "./pages/Core";
import Consultancy from "./pages/Consultancy";
import Footer from "./Footer.js";
import Authorised from "./Authorised";
import Dashboard from "./pages/Dashboard";
import PosterSidebar from "./PosterSidebar";

class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 850 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/workstreet">
            <Navbar />
            {isDesktop ? <PosterSidebar /> : <></>}
            <Route path="/workstreet" exact component={Authorised(Home)} />
            <Route
              path="/workstreet/categories"
              exact
              component={Authorised(Categories)}
            />
            <Route
              path="/workstreet/companies"
              exact
              component={Authorised(Companies)}
            />
            <Route
              path="/workstreet/about-us"
              exact
              component={Authorised(AboutUs)}
            />
            <Route
              path="/workstreet/sign-out"
              exact
              component={Authorised(SignOut)}
            />
            <Route path="/workstreet/core" exact component={Authorised(Core)} />
            <Route
              path="/workstreet/consultancy"
              exact
              component={Authorised(Consultancy)}
            />
            <Route path="/workstreet/dashboard" exact component={Dashboard} />
            <Footer />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default House;
