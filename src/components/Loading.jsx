import styles from "./Loading.module.scss";
export const Loading = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.loaderInner}>
				<div className={styles.loaderInner}>
					<div className={styles.loaderLine}></div>
				</div>
				<div className={styles.loaderLineWrap}>
					<div className={styles.loaderLine}></div>
				</div>
				<div className={styles.loaderLineWrap}>
					<div className={styles.loaderLine}></div>
				</div>
				<div className={styles.loaderLineWrap}>
					<div className={styles.loaderLine}></div>
				</div>
				<div className={styles.loaderLineWrap}>
					<div className={styles.loaderLine}></div>
				</div>
			</div>
		</div>
	);
};
