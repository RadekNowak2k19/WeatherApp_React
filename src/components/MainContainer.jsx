import styles from "./MainContainer.module.scss";
export const MainContainer = ({ children }) => {
	return <main className={styles.main}>{children}</main>;
};
