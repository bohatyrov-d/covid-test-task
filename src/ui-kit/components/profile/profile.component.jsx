import { ButtonComponent, } from "../button/button.component";
import "./profile.styles.css"

export function ProfileComponent({ user, isAuthenticated, isLoading, logout }) {
	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		isAuthenticated
		&& (
			<>
				<div className="profile-section">
					<img src={user.picture} alt={user.name}/>
					<span>{user.name}</span>
				</div>
				<div className="actions-section">
					<ButtonComponent onClick={logout}>
						Log Out
					</ButtonComponent>
				</div>
			</>
		)
	);
}
