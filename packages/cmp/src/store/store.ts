import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type State = {
	firstName: string;
	lastName: string;
};

type Action = {
	updateFirstName: (firstName: State["firstName"]) => void;
	updateLastName: (lastName: State["lastName"]) => void;
};

// const usePersonStore = create<State & Action>()((set) => ({
// 	firstName: "",
// 	lastName: "",
// 	updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
// 	updateLastName: (lastName) => set(() => ({ lastName: lastName })),
// }));

const usePersonStore = create<State & Action>()(
	devtools(
		persist(
			(set) => ({
				firstName: "",
				lastName: "",
				updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
				updateLastName: (lastName) => set(() => ({ lastName: lastName })),
			}),
			{ name: "personStore" } //persist key
		),
		{ store: "usePersonStore", anonymousActionType: "test" }
	)
);

export { usePersonStore };
