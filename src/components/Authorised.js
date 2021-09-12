import axios from 'axios'
import React, { Component } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Img from '../images/loader.gif'

const Authorised = (OrignalComponent) => {
    class NewComponent extends Component {
        static contextType = AuthContext
        state = {
            isAllowed: '',
            isLoading: true
        }

        componentDidMount() {
            const { authToken } = this.context
            console.log(authToken, 'AuthToken')
            axios
                .post('https://workstreet.herokuapp.com/auth', {
                    auth_token: authToken
                })
                .then((res) => {
                    console.log(res.data, 'REPONSE Recieved')
                    this.setState({
                        isAllowed: res.data,
                        isLoading: false
                    })
                })
                .catch(() => {
                    this.setState({
                        isAllowed: 'No',
                        isLoading: false
                    })
                })
        }

        render() {
            if (this.state.isLoading) {
                return (
                    <div
                        style={{
                            position: 'relative',
                            height: '70vh',
                            zIndex: '-100'
                        }}
                    >
                        <img
                            src={Img}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%,-50%)'
                            }}
                            alt="Loader"
                        />
                    </div>
                )
            }
            if (this.state.isAllowed === 'No') {
                return (
                    <h1 style={{ textAlign: 'center', height: '70vh' }}>
                        Error: Your are not Authorised
                    </h1>
                )
            }
            return <OrignalComponent />
        }
    }
    return NewComponent
}

export default Authorised
