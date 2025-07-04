import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from "../NavBar/NavBar.jsx";

export default function Layout() {
	return (
		<>
			<NavBar/>
			<Outlet/>
		</>
	);
}