import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Homepage } from "./views";
import { Provider } from "react-redux";
import { store } from "./app/store";

// import Login from "./views/Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Homepage />
			{/* <Login /> */}
		</Provider>
	</React.StrictMode>
);
