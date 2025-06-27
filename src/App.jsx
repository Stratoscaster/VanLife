import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./components/About.jsx";
import Home from './components/Home.jsx';
import {createGlobalStyle} from "styled-components"
import './server.js'
import Vans from "./components/Vans/Vans.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const GlobalStyle = createGlobalStyle`
  body, .react-root {
    padding: 0;
    margin: 0;
    min-width: 100%;
  }
`

function App() {

	return (
		<div className={'app-container'}>
			<BrowserRouter>
			<NavBar/>
				<Routes>
					<Route path={"/"}
						   element={<Home/>}/>
					<Route path={"/about"}
						   element={<About/>}/>
					<Route path={"/vans"}
						   element={<Vans/>}/>
				</Routes>
				<GlobalStyle/>
			</BrowserRouter>
		</div>

	)
}

export default App
