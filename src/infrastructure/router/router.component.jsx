import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function ProtectedRoute() {
	const { isAuthenticated, isLoading, loginWithRedirect, } = useAuth0();
	if (!isLoading && !isAuthenticated) {
		loginWithRedirect();

		return (<div>Loading...</div>)
	}

	return (
		<Outlet />
	)
}
