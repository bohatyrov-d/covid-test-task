import "./button.styles.css";

export function ButtonComponent(
	{
		children,
		onClick,
		className,
		styles,
		type,
	}) {
	const buttonClass = className ? `button ${className}` : 'button';
	return (
		<button onClick={onClick} className={buttonClass} style={styles} type={type} >
			{children}
		</button>
	)
}
