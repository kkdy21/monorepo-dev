import { usePersonStore } from "../../../store/store";
import { ReactElement } from "react";

export default function NameForm(): ReactElement {
	const { firstName, lastName, updateFirstName, updateLastName } =
		usePersonStore((s) => s);

	return (
		<>
			<div
				className={"child-name-box"}
				css={{ border: "solid 4px blue", width: "20rem" }}
			>
				<h1>child Component</h1>
				<label>firstName</label>
				<input
					value={firstName}
					onChange={(e) => updateFirstName(e.target.value)}
				/>
				<label>lastName</label>
				<input
					value={lastName}
					onChange={(e) => updateLastName(e.target.value)}
				/>
			</div>
		</>
	);
}
