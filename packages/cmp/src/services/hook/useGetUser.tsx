import { IUser } from "../../@types";
import { getUserList } from "../api";
import { useQuery } from "@tanstack/react-query";

function useGetUser() {
	const {
		isLoading,
		error,
		data: userList,
		refetch,
		isError,
		isSuccess,
	} = useQuery<{ data: IUser[] }>({
		queryKey: ["userlist"],
		queryFn: getUserList,
		refetchIntervalInBackground: false,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		retry: 2,
		staleTime: 30 * 1000,
	});

	return { isLoading, error, userList, refetch, isError, isSuccess };
}

export default useGetUser;
