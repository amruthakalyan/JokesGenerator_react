import Joke from "./Components/Joke";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
	return (
		<div className="App">
			<Navbar/>
			<h1>Jokes Generator Using React 
        js and Joke API</h1>
			<Joke/>
			<Footer/>
		</div>
	);
}

export default App;
