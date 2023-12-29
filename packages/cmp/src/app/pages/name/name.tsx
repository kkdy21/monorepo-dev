import { ReactElement } from "react";
import { usePersonStore } from "../../../store/store";
import NameForm from "./nameForm";

export default function Name(): ReactElement {
	const { firstName, lastName } = usePersonStore((s) => s);

	return (
		<>
			<h3>first Name : {firstName}</h3>
			<h3>lastName : {lastName}</h3>
			<NameForm></NameForm>
		</>
	);
}
