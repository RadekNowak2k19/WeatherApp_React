// Components
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import { Footer } from "./components/Footer";
import { WeatherApp } from "./features/WeatherApp";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import { useWeather } from "./context/WeatherContext";
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${API_KEY}&units=${UNITS}`;
// const FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=Warsaw&appid=f19cccf1d9b5d6373110845d2578547c&units=${UNITS}`;

function App() {
	const { status } = useWeather();
	return (
		<>
			<Header />
			<MainContainer>
				{status === "loading" && <Loading />}
				{status === "error" && <Error />}
				{status === "ready" && <WeatherApp />}
			</MainContainer>
			<Footer />
		</>
	);
}

export default App;
