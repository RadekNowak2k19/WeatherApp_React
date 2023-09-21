// Function that converts time from Unix timestamp to hours and minutes to shows sunrise and sunset
export const convertTime = duration => {
	const unixTimestamp = duration;
	const time = new Date(unixTimestamp * 1000).toLocaleTimeString("default");
	return time;
};
