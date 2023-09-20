import { currentDate } from "../utils/time";
import styles from "./Location.module.scss";
export const Location = ({ name, sys }) => {
	return (
		<div className={`${styles.location} weatherComponent`}>
			<div className={styles.currentTime}>
				<p>{currentDate}</p>
			</div>
			<div className={styles.city}>
				<p>
					<span>{name}</span>, <strong>{sys.country}</strong>{" "}
				</p>
			</div>
		</div>
	);
};
