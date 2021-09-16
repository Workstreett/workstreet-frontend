import React from 'react'
import { Redirect } from 'react-router'
import { AuthContext } from '../../contexts/AuthContext'
import '../../css/appage.css'

class SignOut extends React.Component {
    static contextType = AuthContext
    render() {
        const { setToken } = this.context
        setToken('')
        return <Redirect to="/" />
    }
}

export default SignOut
