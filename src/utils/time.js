const options = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
};
const now = new Date();
const currentDate = new Intl.DateTimeFormat("Pl", options).format(now);
export { currentDate };
