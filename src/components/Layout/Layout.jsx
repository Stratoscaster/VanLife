import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import './Layout.css';
export default function Layout() {
	return (
		<>
			<div className={'LAYOUT__footer-push'}>
				<NavBar/>
				<Outlet/>
			</div>
			<Footer/>
		</>
	);
}