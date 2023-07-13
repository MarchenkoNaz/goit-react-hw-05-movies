export const getSimpleDate = (dateISO) => {
	const date = new Date(dateISO);
	const normalDate = date.toLocaleString();
	return normalDate
}