import { useRouteError } from "react-router-dom";
import { ReactElement } from "react";
import "./error.page.scss";
export default function ErrorPage(): ReactElement {
	//eslint-disable-next-line
	const error: any = useRouteError();
	console.error(error);
	this.resizeObserver = new ResizeObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.contentBoxSize) {
					// contentBoxSize is an array:
					// console.log('entry.contentBoxSize: ' + entry.contentBoxSize[0].inlineSize);
				} else {
					// console.log('entry.contentRect: ' + entry.contentRect.width);
				}
			}
		}
	);
	this.resizeObserver.observe(this.lineUnitChart.nativeElement);


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
