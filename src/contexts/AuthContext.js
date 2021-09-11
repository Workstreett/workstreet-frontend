import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

class AuthContextProvider extends Component {
  state = {
    authToken: '',
  }
  setToken = (token) => {
    localStorage.setItem('authToken', token)
    this.setState({
      authToken: token,
    })
  }
  render() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.authToken = localStorage.getItem('authToken')
    return (
      <AuthContext.Provider value={{ ...this.state, setToken: this.setToken }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider
