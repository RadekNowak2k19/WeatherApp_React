import styles from "./InfoElement.module.scss";
export const InfoElement = ({ temp, title }) => {
	return (
		<div className={styles.infoElement}>
			<span>{title}: </span>
			<span>{temp}</span>
		</div>
	);
};
