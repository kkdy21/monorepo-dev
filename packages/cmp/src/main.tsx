import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import ErrorPage from "./app/pages/error/error.page";
import Root from "./app/layout/main/layout.main";
import Contacts from "./app/pages/content/contacts";
import Name from "./app/pages/name/name";

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
			{
				path: "name",
				element: <Name />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
