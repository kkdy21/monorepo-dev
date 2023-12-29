import { useRouteError } from "react-router-dom";
import { ReactElement } from "react";
import "./error.page.scss";
export default function ErrorPage(): ReactElement {
	//eslint-disable-next-line
	const error: any = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.error.message}</i>
			</p>
		</div>
	);
}
