import Root from "../app/layout/main/layout.main";
import ErrorPage from "../app/pages/error/error.page";
import Contacts from "../app/pages/content/contacts";
import Name from "../app/pages/name/name";
import UserList from "../app/pages/userlist/userlist";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

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

export default router;
