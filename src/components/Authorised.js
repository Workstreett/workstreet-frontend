import axios from "axios";
import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Authorised = (OrignalComponent) => {
	class NewComponent extends Component {
		static contextType = AuthContext;
		state = {
			isAllowed: "",
			isLoading: true,
		};
		componentDidMount() {
			const { authToken } = this.context;
			console.log(authToken, "AuthToken");
			axios
				.post("https://workstreet.herokuapp.com/auth", {
					auth_token: authToken,
				})
				.then((res) => {
					console.log(res.data, "REPONSE Recieved");
					this.setState({
						isAllowed: res.data,
						isLoading: false,
					});
				})
				.catch((err) => {
					this.setState({
						isAllowed: "No",
						isLoading: false,
					});
				});
		}
		render() {
			if (this.state.isLoading) {
				return (
					<h1 style={{ textAlign: "center", height: "70vh" }}>
						Wait while we are verifying your authorisation
					</h1>
				);
			}
			if (this.state.isAllowed === "No") {
				return (
					<h1 style={{ textAlign: "center", height: "70vh" }}>
						Error: Your are not Authorised
					</h1>
				);
			}
			return <OrignalComponent />;
		}
	}
	return NewComponent;
};

export default Authorised;
