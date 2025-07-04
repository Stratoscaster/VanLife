import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./components/About.jsx";
import Home from './components/Home.jsx';
import {createGlobalStyle} from "styled-components"
import './server.js'
import Vans from "./components/Vans/Vans.jsx";
import VanDetail from "./components/Vans/VanDetail/VanDetail.jsx";
import Layout from './components/Layout/Layout.jsx'

import HostLayout from "./components/Layout/HostLayout.jsx";
import Dashboard from "./components/Host/Dashboard.jsx";
import Income from "./components/Host/Income.jsx";
import Reviews from "./components/Host/Reviews.jsx";


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

				{/* Layout Route */}
				<Routes>
					<Route element={<Layout/>}>

						<Route path={"/"}
							   element={<Home/>}/>
						<Route path={"/about"}
							   element={<About/>}/>
						<Route path={"/vans"}
							   element={<Vans/>}/>
						<Route path={'/host'}
							   element={<HostLayout/>}>
							<Route path={'/host/income'}
								   element={<Income/>}/>
							<Route path={'/host/reviews'}
								   element={<Reviews/>}/>
							<Route path={'/host/dashboard'}
								   element={<Dashboard/>}/>
						</Route>
						<Route path={"/vans/:id"}
							   element={<VanDetail/>}/>
					</Route>
				</Routes>
				<GlobalStyle/>
			</BrowserRouter>
		</div>

	)
}

export default App
