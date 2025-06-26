import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./components/About.jsx";
import Home from './components/Home.jsx';

function App() {

	return (

		<BrowserRouter>

			<Routes>
				<Route path={"/"}
					   element={<Home/>}/>
				<Route path={"/about"}
					   element={<About/>}/>
			</Routes>

		</BrowserRouter>

	)
}

export default App
