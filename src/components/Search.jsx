import { searchIcon } from "../assets/images/index";
export const Search = ({ dispatch, city, setCity }) => {
	const handleSearchCity = () => {
		if (!city) return;
		dispatch({ type: "searchCity", payload: city });
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
