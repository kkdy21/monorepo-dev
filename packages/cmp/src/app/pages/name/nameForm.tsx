import { usePersonStore } from "../../../store/store";
import { ReactElement } from "react";

export default function NameForm(): ReactElement {
	const { firstName, lastName, updateFirstName, updateLastName } =
		usePersonStore((s) => s);

	return (
		<>
			<p>자식 Component</p>
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
		</>
	);
}
