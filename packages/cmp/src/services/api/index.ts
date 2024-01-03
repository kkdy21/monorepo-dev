import { jsonInstance } from "./axios";

export const getUserList = async () => {
	// + 추가적인로직
	return await jsonInstance.get("userList");
};

/* eslint-disable*/
export const addUser = async (usrInfo: any) => {
	// + 추가적인로직
	return await jsonInstance.post("userList", usrInfo);
};
