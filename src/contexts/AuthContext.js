import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
	state = {
		authToken: "",
	};
	setToken = (token) => {
		this.setState({
			authToken: token,
		});
	};
	render() {
		return (
			<AuthContext.Provider
				value={{ ...this.state, setToken: this.setToken }}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

export default AuthContextProvider;
