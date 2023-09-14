import { logoIcon } from "../assets/images/index";
export const Logo = () => {
	return (
		<div className="logo">
			<span>
				<img src={logoIcon} alt="Logo icon" />
			</span>
			<p>WeatherApp</p>
		</div>
	);
};
