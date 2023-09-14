export const Time = () => {
	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const currentTime = new Date().getDay();
	const day = days[currentTime - 1];
	return <div className="time">{day}</div>;
};
