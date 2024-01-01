import { ReactElement } from "react";
import { StyledButton } from "@package/common-components";
import { getUserList } from "../../../services/api";
import { IUser } from "../../../@types";
import Contacts from "../content/contacts";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function UserList(): ReactElement {
	const queryClient = useQueryClient();

	const {
		isLoading,
		error,
		data: userList,
	} = useQuery<{ data: IUser[] }>({
		queryKey: ["userlist"],
		queryFn: getUserList,
	});
	const onClick = () => {
		queryClient.invalidateQueries({ queryKey: ["userlist"] });
		// refetch();
	};

	if (isLoading) return <p>Loading</p>;

	if (error) return <p>An error has occurred {error.message}</p>;

	return (
		<>
			<StyledButton onClick={onClick}>getUserList</StyledButton>
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
