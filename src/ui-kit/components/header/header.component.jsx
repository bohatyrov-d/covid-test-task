import { useAuth0, } from "@auth0/auth0-react";
import { ProfileComponent, } from "../profile/profile.component";
import "./header.styles.css";

export function HeaderComponent() {
	const { user, isAuthenticated, isLoading, logout, } = useAuth0();
	function doLogout() {
		logout({ returnTo: window.location.origin })
	}

	return (
		<div className="floating-header">
			<div className="header shadow">
				<ProfileComponent
					user={user}
					isAuthenticated={isAuthenticated}
					isLoading={isLoading}
					logout={doLogout}
				/>
			</div>
			<ProfileComponent />
		</div>
	)
}
