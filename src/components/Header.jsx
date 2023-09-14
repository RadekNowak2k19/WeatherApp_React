import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { Time } from "./Time";
export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<Time />
		</header>
	);
};
