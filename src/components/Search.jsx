import { searchIcon } from "../assets/images/index";
import { ACTIONS } from "../utils/actions";
import { useWeather } from "../context/WeatherContext";
export const Search = () => {
	const { dispatch, city, setCity } = useWeather();

	const handleSearchCity = () => {
		if (!city) return;
		dispatch({ type: ACTIONS.SEARCH_CITY, payload: city });
	};
	return (
		<form className="search" onSubmit={e => e.preventDefault()}>
			<input
				className="input"
				type="text"
				value={city}
				onChange={e => setCity(e.target.value)}
			/>
			<button onClick={handleSearchCity}>
				<img src={searchIcon} alt="Search icon inner button element" />
			</button>
		</form>
	);
};
