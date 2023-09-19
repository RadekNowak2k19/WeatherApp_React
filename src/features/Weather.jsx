import styles from "./Weather.module.scss";
export const Weather = ({ children }) => {
	return <div className={`${styles.weather} weatherComponent`}>{children}</div>;
};
