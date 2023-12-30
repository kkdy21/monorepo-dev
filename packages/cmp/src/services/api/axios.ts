import axios from "axios";

//실패시 상황을 위해 timeout:1000으로 변경
export const jsonInstance = axios.create({
	baseURL: "http://localhost:4000",
	timeout: 3000,
	headers: { "X-Custom-Header": "foobar", "Content-Type": "application/json" },
});
