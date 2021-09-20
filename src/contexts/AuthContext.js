import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

class AuthContextProvider extends Component {
    state = {
        authToken: '',
        user_id: '',
        fullname: '',
        branch: '',
        year: '',
        institute: '',
        officialmailid: '',
        username: ''
    }

    setUserDetails = (details) => {
        localStorage.setItem('authToken', details.authToken)
        localStorage.setItem('user_id', details.user_id)
        localStorage.setItem('fullname', details.fullname)
        localStorage.setItem('branch', details.branch)
        localStorage.setItem('year', details.year)
        localStorage.setItem('institute', details.institute)
        localStorage.setItem('officialmailid', details.officialmailid)
        localStorage.setItem('username', details.username)
        this.setState({
            authToken: details.authToken,
            user_id: details.user_id,
            fullname: details.fullname,
            branch: details.branch,
            year: details.year,
            institute: details.institute,
            officialmailid: details.officialmailid,
            username: details.username
        })
    }

    componentDidMount() {
        this.setState({
            authToken: localStorage.getItem('authToken'),
            user_id: localStorage.getItem('user_id'),
            fullname: localStorage.getItem('fullname'),
            branch: localStorage.getItem('branch'),
            year: localStorage.getItem('year'),
            institute: localStorage.getItem('institute'),
            officialmailid: localStorage.getItem('officialmailid'),
            username: localStorage.getItem('username')
        })
    }

    render() {
        // eslint-disable-next-line react/no-direct-mutation-state
        return (
            <AuthContext.Provider
                value={{
                    ...this.state,
                    setUserDetails: this.setUserDetails
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider
