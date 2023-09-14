import { searchIcon } from "../assets/images/index";
export const Search = () => {
	return (
		<form className="search">
			<input className="input" type="text" />
			<button>
				<img src={searchIcon} alt="Search icon inner button element" />
			</button>
		</form>
	);
};
