import { Form, useNavigate } from "react-router-dom";
import { ReactElement } from "react";
import { IUser } from "../../../types";

export default function Contacts({ user }: { user: IUser }): ReactElement {
	const navigate = useNavigate();
	const occurError = () => {
		navigate("/error");
	};

	return (
		<div id="contact">
			<div className="avatar">
				<img key={user.avatar} src={user.avatar || undefined} />
			</div>

			<div>
				<h1>
					{user.first || user.last ? (
						<>
							{user.first} {user.last}
						</>
					) : (
						<i>No Name</i>
					)}{" "}
					<Favorite contact={user} />
				</h1>
				{user.twitter}
				{user.notes && <p>{user.notes}</p>}

				<div>
					<button onClick={occurError}>Error 발생</button>
				</div>
			</div>
		</div>
	);
}

/* eslint-disable */
function Favorite({ contact }: any) {
	const favorite: any = contact.favorite;
	return (
		<Form>
			<button
				name="favorite"
				value={favorite ? "false" : "true"}
				aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
			>
				{favorite ? "★" : "☆"}
			</button>
		</Form>
	);
}
