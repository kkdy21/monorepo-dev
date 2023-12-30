import { jsonInstance } from "./axios";

export const getUserList = async () => {
	return await jsonInstance.get("userList");
};

/* eslint-disable*/
export const addUser = async (usrInfo: any) => {
	return await jsonInstance.post("userList", usrInfo);
};
