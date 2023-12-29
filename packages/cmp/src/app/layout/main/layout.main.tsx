import { Link, Outlet } from "react-router-dom";
import { DynamicSvgIcon } from "@package/common-components";
export default function Root() {
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<nav>
					<ul>
						<li>
							<DynamicSvgIcon iconProps={{ name: "home-02" }} />
							<Link to={`/`}>Home</Link>
						</li>
						<li>
							<DynamicSvgIcon iconProps={{ name: "pie-chart-03" }} />
							<Link to={`/contacts/1`}>Your Name</Link>
						</li>
						<li>
							<DynamicSvgIcon iconProps={{ name: "settings-01" }} />
							<Link to={`/name`}>Your Friend</Link>
						</li>
					</ul>
				</nav>
			</div>
			{/*nested-routes*/}
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}
