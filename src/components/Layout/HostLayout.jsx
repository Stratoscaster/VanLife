import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import './HostLayout.css'

export default function HostLayout() {
	return (
		<>
			<div className={'HLAYOUT__navbar-container'}>
				<div className={'HLAYOUT__nav-items-container'}>
					<Link to={'/host/dashboard'}>Dashboard</Link>
					<Link to={'/host/income'}>Income</Link>
					<Link to={'/host/reviews'}>Reviews</Link>
				</div>
			</div>
			<Outlet/>
		</>
	);
}