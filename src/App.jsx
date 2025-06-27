import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./components/About.jsx";
import Home from './components/Home.jsx';
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body, .react-root {
    padding: 0;
    margin: 0;
    min-width: 100%;
  }
`
function App() {

	return (

		<BrowserRouter>

			<Routes>
				<Route path={"/"}
					   element={<Home/>}/>
				<Route path={"/about"}
					   element={<About/>}/>
			</Routes>
			<GlobalStyle/>
		</BrowserRouter>

	)
}

export default App
