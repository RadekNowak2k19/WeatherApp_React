export const convertTime = duration => {
	const unixTimestamp = duration;
	const time = new Date(unixTimestamp * 1000).toLocaleTimeString("default");
	return time;
};
