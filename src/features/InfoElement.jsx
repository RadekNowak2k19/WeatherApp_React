export const InfoElement = ({ temp = null, title, info = null }) => {
	if (temp)
		return (
			<div>
				<span>{title}: </span>
				<span>{temp}</span>
			</div>
		);
	if (temp === null)
		return (
			<div>
				<span>{title}: </span>
				<span>{info}</span>
			</div>
		);
};
