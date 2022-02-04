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

                    <Route path="/googleauth" exact>
                        <GoogleAuthContextProvider>
                            <GoogleLogin />
                        </GoogleAuthContextProvider>
                    </Route>
                    <Route path="/appliedcompany" exact>
                        <GoogleAuthContextProvider>
                            <AppliedCompany />
                        </GoogleAuthContextProvider>
                    </Route>
                    <Route path="/companystatus/:id" exact>
                        <GoogleAuthContextProvider>
                            <CompanyStatus />
                        </GoogleAuthContextProvider>
                    </Route>

                    <Route path="*" exact component={NotFoundPage} />
                </Switch>
            </Router>
        )
    }
}

export default House
