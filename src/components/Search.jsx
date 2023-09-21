import { searchIcon } from "../assets/images/index";
import { ACTIONS } from "../utils/actions";
export const Search = ({ dispatch, city, setCity }) => {
	const handleSearchCity = () => {
		if (!city) return;
		dispatch({ type: ACTIONS.SEARCH_CITY, payload: city });
	};
	// dispatch({ type: "searchCity", payload: e.target.value }
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
