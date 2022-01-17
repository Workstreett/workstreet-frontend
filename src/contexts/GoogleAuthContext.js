import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

export const GoogleAuthContext = createContext()

class GoogleAuthContextProvider extends Component {
    state = {
        userId: null,
        name: null,
        email: null,
        userImg:
            'https://cdn5.vectorstock.com/i/thumb-large/82/59/anonymous-user-flat-icon-vector-18958259.jpg',
        appliedFor: []
    }

    setDetails = (details) => {
        this.setState({
            userId: details._id,
            name: details.name,
            email: details.email,
            userImg: details.userImg,
            appliedFor: details.appliedFor
        })
    }

    async componentDidMount() {
        if (localStorage.getItem('token')) {
            const res = await axios.post('http://localhost:3000/user/get/byId', {
                token: localStorage.getItem('token')
            })
            if (res.data === 'Unauthorised') {
                localStorage.removeItem('token')
                this.props.history.push('/googleauth#error=Your token has expired')
            } else {
                this.setDetails(res.data)
            }
        }
    }

    render() {
        return (
            <GoogleAuthContext.Provider
                value={{
                    ...this.state,
                    setDetails: this.setDetails
                }}
            >
                {this.props.children}
            </GoogleAuthContext.Provider>
        )
    }
}

export default withRouter(GoogleAuthContextProvider)
