import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import ErrorPage from "./app/pages/error/error.page";
import Root, { loader as rootLoader } from "./app/layout/main/layout.main";
import Contacts from "./app/pages/content/contacts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		//nested-routes
		children: [
			{
				path: "contacts/:contactId",
				element: <Contacts />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
