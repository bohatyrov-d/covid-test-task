import "./container.styles.css";

export function ContainerComponent({ children, }) {
	return (
		<div className="container">
			{ children }
		</div>
	)
}
