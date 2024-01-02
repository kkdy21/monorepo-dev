import axios from "axios";

//실패시 상황을 위해 timeout:1000으로 변경
const serverURL = import.meta.env.REACT_APP_SERVER_URL;

/* eslint-disable-next-line */
console.log(serverURL)
export const jsonInstance = axios.create({
	baseURL: serverURL,
	timeout: 3000,
	headers: { "X-Custom-Header": "foobar", "Content-Type": "application/json" },
});
