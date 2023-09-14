// Components
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import { Footer } from "./components/Footer";

// const API_KEY = "f19cccf1d9b5d6373110845d2578547c";
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${API_KEY}`;
function App() {
	// useEffect(function () {
	// 	async function weatherFetch() {
	// 		const res = await fetch(URL);
	// 		const data = await res.json();
	// 		console.log(data.weather[0].icon);
	// 	}
	// 	weatherFetch();
	// }, []);

	return (
		<>
			<Header />
			<MainContainer></MainContainer>
			<Footer />
		</>
	);
}

export default App;
