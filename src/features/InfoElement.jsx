import styles from "./InfoElement.module.scss";
export const InfoElement = ({ temp = null, title, info = null }) => {
	if (temp)
		return (
			<div className={styles.infoElement}>
				<span>{title}: </span>
				<span>{temp}</span>
			</div>
		);
	if (temp === null)
		return (
			<div className={styles.infoElement}>
				<span>{title}: </span>
				<span>{info}</span>
			</div>
		);
};
