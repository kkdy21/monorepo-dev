import { Link, Outlet } from "react-router-dom";
import { DynamicSvgIcon } from "@package/common-components";
import { useState } from "react";
export default function Root() {
	const [headerName, setHeaderName] = useState<string>("");

	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<nav>
					<ul>
						<li onClick={() => setHeaderName("Home")}>
							<DynamicSvgIcon iconProps={{ name: "home-02" }} />
							<Link to={`/`}>Home</Link>
						</li>
						<li onClick={() => setHeaderName("Contact")}>
							<DynamicSvgIcon iconProps={{ name: "pie-chart-03" }} />
							<Link to={`/contacts/1`}>Contact</Link>
						</li>
						<li onClick={() => setHeaderName("Zustand Test")}>
							<DynamicSvgIcon iconProps={{ name: "settings-01" }} />
							<Link to={`/name`}>Zustand Test</Link>
						</li>
						<li onClick={() => setHeaderName("React Query Test")}>
							<DynamicSvgIcon iconProps={{ name: "check-done-01" }} />
							<Link to={`/userlist`}>React Query Test</Link>
						</li>
					</ul>
				</nav>
			</div>
			{/*nested-routes*/}
			<div id="detail">
				<header>
					<h1>{headerName}</h1>
					<hr></hr>
					<br />
					<br />
				</header>
				<Outlet />
			</div>
		</>
	);
}
