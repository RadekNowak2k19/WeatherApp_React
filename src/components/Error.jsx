import { errorIcon } from "../assets/images";
import styles from "./Error.module.scss";
export const Error = () => {
	return (
		<div className={styles.error}>
			<span>
				<img src={errorIcon} alt="Error icon" />
			</span>
			<p>Something went wrong :(</p>
		</div>
	);
};
