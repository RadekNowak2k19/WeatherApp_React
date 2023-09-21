// Display the present date.
const options = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
};
const now = new Date();
const currentDate = new Intl.DateTimeFormat("PL", options).format(now);
export { currentDate };
