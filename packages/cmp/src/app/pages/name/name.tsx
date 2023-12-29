import { ReactElement } from "react";
import { usePersonStore } from "../../../store/store";
import NameForm from "./nameForm";
import { css } from "@emotion/react";

export default function Name(): ReactElement {
	const { firstName, lastName } = usePersonStore((s) => s);

	const divStyle = css`
		border: solid 4px green;
		width: 20rem;
		.child-name-box {
			padding-top: 2rem;
		}
	`;

	return (
		<>
			<div css={divStyle}>
				<h1>parent component</h1>
				<h3>first Name : {firstName}</h3>
				<h3>lastName : {lastName}</h3>
			</div>
			<NameForm></NameForm>
		</>
	);
}
