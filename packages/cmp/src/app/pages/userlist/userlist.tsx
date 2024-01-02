import { ReactElement } from "react";
import { StyledButton } from "@package/common-components";
import { IUser } from "../../../@types";
import Contacts from "../content/contacts";
import { useQueryClient } from "@tanstack/react-query";
import useGetUser from "../../../services/hook/useGetUser";
export default function UserList(): ReactElement {
	const queryClient = useQueryClient();

	const { isLoading, error, userList, refetch } = useGetUser();
	const onClick = () => {
		queryClient.invalidateQueries(
			{ queryKey: ["userlist"] },
			{ cancelRefetch: true }
		);
	};

	if (isLoading) return <p>Loading</p>;

	if (error) return <p>An error has occurred {error.message}</p>;

	return (
		<>
			<StyledButton onClick={onClick}>getUserList</StyledButton>
			<StyledButton onClick={() => refetch()}>refetch</StyledButton>
			<div>
				{userList?.data.map((user: IUser) => (
					<div key={user.id}>
						<br />
						<Contacts user={user}></Contacts>
					</div>
				))}
			</div>
		</>
	);
}
