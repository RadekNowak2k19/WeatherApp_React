import styles from "./Footer.module.scss";
export const Footer = () => {
	return (
		<div className={styles.footer}>
			<p>
				Created using the <strong>OpenWeatherMap</strong> &copy; All rights
				reserved.
			</p>
		</div>
	);
};
