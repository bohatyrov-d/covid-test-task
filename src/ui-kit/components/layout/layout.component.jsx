import { HeaderComponent, } from "../header/header.component";
import "./layout.styles.css";

export function LayoutComponent({ children, }) {
	return (
		<div className="layout">
			<HeaderComponent />
			<div className="content-block">
				{children}
			</div>
		</div>
	)
}
