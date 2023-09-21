import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { WeatherProvider } from "./context/WeatherContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<WeatherProvider>
			<App />
		</WeatherProvider>
	</React.StrictMode>
);
