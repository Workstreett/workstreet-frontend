import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../css/secGrid.css'
import Landing from '../pages/Landing.js'
import GoogleLogin from '../pages/GoogleLogin'
import AppliedCompany from '../pages/AppliedCompany'
import CompanyStatus from '../pages/CompanyStatus.js'
import NotFoundPage from '../pages/NotFoundPage'
import GoogleAuthContextProvider from '../contexts/GoogleAuthContext'
class House extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <GoogleAuthContextProvider>
                        <Route path="/googleauth" exact component={GoogleLogin} />
                        <Route path="/appliedcompany" exact component={AppliedCompany} />
                        <Route path="/companystatus/:id" exact component={CompanyStatus} />
                    </GoogleAuthContextProvider>
                    <Route path="*" exact component={NotFoundPage} />
                </Switch>
            </Router>
        )
    }
}

export default House
