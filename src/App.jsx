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
import HostVans from "./components/HostVans/HostVans.jsx";
import HostVanDetail from "./components/HostVans/HostVanDetail/HostVanDetail.jsx";
import HostVanDetailsDetails from "./components/HostVans/HostVanDetail/HostVanDetailsDetails/HostVanDetailsDetails.jsx";
import HostVanDetailsPhotos from "./components/HostVans/HostVanDetail/HostVanDetailsPhotos/HostVanDetailsPhotos.jsx";
import HostVanDetailsPricing from "./components/HostVans/HostVanDetail/HostVanDetailsPricing/HostVanDetailsPricing.jsx";
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

						<Route index
							   element={<Home/>}/>
						<Route path={"/about"}
							   element={<About/>}/>
						<Route path={"/vans"}
							   element={<Vans/>}/>
						{/* Paths relative to /host*/}
						<Route path={'host'}
							   element={<HostLayout/>}>
							{/* /host/income relative path */}
							<Route path={'income'}
								   element={<Income/>}/>
							<Route path={'reviews'}
								   element={<Reviews/>}/>
							<Route path={'vans'}
								   element={<HostVans/>}/>
                            {/* Van Detail Routes*/}
							<Route path={'vans/:id'}
								   element={<HostVanDetail/>}>
                                <Route path={''} index
                                    element={<HostVanDetailsDetails/>}/>
                                <Route path={'pricing'}
                                       element={<HostVanDetailsPricing/>}/>
                                <Route path={'photos'}
                                       element={<HostVanDetailsPhotos/>}/>
                            </Route>
							{/* Making this an 'index' route ensures that it shows in the Outlet of HostLayout by
							 default at /host */}
							<Route index
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
