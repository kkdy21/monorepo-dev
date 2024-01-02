import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import ErrorPage from "./app/pages/error/error.page";
import Root from "./app/layout/main/layout.main";
import Contacts from "./app/pages/content/contacts";
import Name from "./app/pages/name/name";
import UserList from "./app/pages/userlist/userlist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";

const contact = {
	first: "Your",
	last: "Name",
	avatar: "/images/testImage.png",
	twitter: "your_handle",
	notes: "Some notes",
	favorite: true,
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		//nested-routes
		children: [
			{
				path: "contacts/:contactId",
				element: <Contacts user={contact} />,
			},
			{
				path: "name",
				element: <Name />,
			},
			{
				path: "userlist",
				element: <UserList />,
			},
			{
				path: "app",
				element: <App />,
			},
		],
	},
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
