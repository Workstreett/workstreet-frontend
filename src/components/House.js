import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Navbar from './Navbar'
import Login from './Login'
import Signup from './Signup'
import Categories from '../pages/Categories'
import SDE from '../pages/SDE'
import Marketing from '../pages/Marketing'
import SignOut from '../pages/SignOut'
import Core from '../pages/Core'
import DataScience from '../pages/DataScience'
import Footer from './Footer.js'
import Authorised from './Authorised'
import Profile from '../pages/Profile'
import PosterSidebar from './PosterSidebar'
import '../css/secGrid.css'
class House extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/workstreet">
                        <Navbar />
                        <div className="sec-grid">
                            <PosterSidebar />
                            {/* <Route path="/workstreet" exact component={Authorised(Home)} /> */}
                            <Route
                                path="/workstreet/categories"
                                exact
                                component={Authorised(Categories)}
                            />
                            <Route path="/workstreet/sde" exact component={Authorised(SDE)} />
                            <Route
                                path="/workstreet/marketing"
                                exact
                                component={Authorised(Marketing)}
                            />
                            <Route path="/workstreet/sign-out" exact component={SignOut} />
                            <Route path="/workstreet/core" exact component={Authorised(Core)} />
                            <Route
                                path="/workstreet/data-science"
                                exact
                                component={Authorised(DataScience)}
                            />
                            <Route path="/workstreet/profile" exact component={Profile} />
                        </div>
                        <Footer />
                    </Route>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </Router>
        )
    }
}

export default House
