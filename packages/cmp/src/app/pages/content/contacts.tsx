import { Form, useNavigate } from "react-router-dom";

export default function Contacts() {
	const navigate = useNavigate();
	const occurError = () => {
		navigate("/error");
	};
	const contact = {
		first: "Your",
		last: "Name",
		avatar: "/images/testImage.png",
		twitter: "your_handle",
		notes: "Some notes",
		favorite: true,
		onClick: occurError,
	};

	return (
		<div id="contact">
			<div className="avatar">
				<img key={contact.avatar} src={contact.avatar || null} />
			</div>

			<div>
				<h1>
					{contact.first || contact.last ? (
						<>
							{contact.first} {contact.last}
						</>
					) : (
						<i>No Name</i>
					)}{" "}
					<Favorite contact={contact} />
				</h1>
				{contact.twitter}
				{contact.notes && <p>{contact.notes}</p>}

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
		<Form method="post">
			<button
				name="favorite"
				value={favorite ? "false" : "true"}
				aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
				onClick={contact.onClick}
			>
				{favorite ? "★" : "☆"}
			</button>
		</Form>
	);
}
