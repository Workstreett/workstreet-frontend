import React from 'react'
import Navbar from './Navbar'
import '../css/appage.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categories from './pages/Categories'
import Companies from './pages/Companies'
import AboutUs from './pages/AboutUs'
import SignOut from './pages/SignOut'
import Core from './pages/Core'
import Consultancy from './pages/Consultancy'
import Footer from './Footer.js'
function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/workstreet" exact component={Home} />
                    <Route path="/workstreet/categories" component={Categories} />
                    <Route path="/workstreet/companies" component={Companies} />
                    <Route path="/workstreet/about-us" component={AboutUs} />
                    <Route path="/" component={SignOut} />
                    <Route path="/workstreet/core" component={Core} />
                    <Route path="/workstreet/consultancy" component={Consultancy} />
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default App
