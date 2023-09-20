import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { Time } from "./Time";
export const Header = ({ dispatch, city, setCity }) => {
	return (
		<header className={styles.header}>
			<Logo />
			<Search dispatch={dispatch} city={city} setCity={setCity} />
			<Time />
		</header>
	);
};
