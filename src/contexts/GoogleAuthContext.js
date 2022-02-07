import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { config } from '../env'

export const GoogleAuthContext = createContext()

class GoogleAuthContextProvider extends Component {
    state = {
        userId: null,
        name: null,
        email: null,
        userImg:
            'https://cdn5.vectorstock.com/i/thumb-large/82/59/anonymous-user-flat-icon-vector-18958259.jpg',
        appliedFor: [],
        isLoading: true
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
            const res = await axios.post(config.apiDomain + 'user/get/byId', {
                token: localStorage.getItem('token')
            })
            if (res.data === 'Unauthorised') {
                localStorage.removeItem('token')
                this.props.history.push('/googleauth#error=Your token has expired')
            } else {
                this.setDetails(res.data)
            }
        } else if (window.location.pathname.toLowerCase() === '/appliedcompany') {
            window.location.pathname = '/googleauth'
        }
        this.setState({ isLoading: false })
        // console.log('Finised')
    }

    render() {
        return (
            <GoogleAuthContext.Provider
                value={{
                    ...this.state,
                    setDetails: this.setDetails
                }}
            >
                {this.state.isLoading ? <></> : this.props.children}
            </GoogleAuthContext.Provider>
        )
    }
}

export default withRouter(GoogleAuthContextProvider)
