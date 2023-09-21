import styles from "./Error.module.scss";
export const Error = () => {
	return (
		<div className={styles.error}>
			<p>Something went wrong :(</p>
		</div>
	);
};
