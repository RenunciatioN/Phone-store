import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from "./App.jsx";
import "./index.scss";

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<Router>
		<QueryClientProvider client={client}>
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</Router>

	// </React.StrictMode>
);


