import { ReactElement } from "react";
import { usePersonStore } from "../../../store/store";
import NameForm from "./nameForm";
import { css } from "@emotion/react";
import { StyledButton } from "@package/common-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../../../services/api";
import { IUser } from "../../../@types";

export default function Name(): ReactElement {
	const { firstName, lastName } = usePersonStore((s) => s);
	const { mutate, isPending } = useMutation({
		mutationKey: ["postUserList"],
		mutationFn: (userinfo: IUser) => addUser(userinfo),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["userlist"] });
			alert("user add success");
		},
	});
	const queryClient = useQueryClient();

	const divStyle = css`
		border: solid 4px green;
		width: 20rem;

		.child-name-box {
			padding-top: 2rem;
		}
	`;

	function handlePost() {
		const newUserInfo: IUser = {
			first: firstName,
			last: lastName,
			avatar: "/images/testImage.png",
			twitter: "your_handle",
			notes: "Some notes",
			favorite: true,
		};

		mutate(newUserInfo);
	}
	if (isPending) {
		return <div>fetching....</div>;
	}
	return (
		<>
			<div css={divStyle}>
				<h1>parent component</h1>
				<h3>first Name : {firstName}</h3>
				<h3>lastName : {lastName}</h3>
			</div>
			<NameForm></NameForm>
			<StyledButton onClick={handlePost}>POST</StyledButton>
		</>
	);
}
