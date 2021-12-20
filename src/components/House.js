import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import MainPage from './MainPage'
// import Navbar from './Navbar'
// import Login from './Login'
// import Signup from './Signup'
// import Categories from '../pages/Categories'
// import SDE from '../pages/SDE'
// import Marketing from '../pages/Marketing'
// import SignOut from '../pages/SignOut'
// import Core from '../pages/Core'
// import DataScience from '../pages/DataScience'
// import Others from '../pages/Others'
// import Footer from './Footer.js'
// import Authorised from './Authorised'
// import Profile from '../pages/Profile'
// import PosterSidebar from './PosterSidebar'
import '../css/secGrid.css'
// import AdminPage from './AdminPage'
// import PostForm from './PostForm'
import Landing from '../pages/Landing.js'
class House extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={MainPage} />
                    <Route path="/workstreet">
                        <Navbar />
                        <div className="sec-grid">
                            <PosterSidebar />
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
                            <Route path="/workstreet/others" exact component={Authorised(Others)} />
                            <Route path="/workstreet/sign-out" exact component={SignOut} />
                            <Route path="/workstreet/core" exact component={Authorised(Core)} />
                            <Route
                                path="/workstreet/data-science"
                                exact
                                component={Authorised(DataScience)}
                            />
                            <Route
                                path="/workstreet/profile"
                                exact
                                component={Authorised(Profile)}
                            />
                        </div>
                        <Footer />
                    </Route>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/admin" component={AdminPage} />
                    <Route exact path="/admin/postform" component={PostForm} /> */}
                    <Route path="/" exact component={Landing} />
                </Switch>
            </Router>
        )
    }
}

export default House
