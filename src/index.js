import React from "react";
import ReactDOM from "react-dom";
import House from "./components/House";
import AuthContextProvider from "./contexts/AuthContext";
import "./index.css";
ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<House />
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
