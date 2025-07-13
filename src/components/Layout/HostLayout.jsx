import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './HostLayout.css'

export default function HostLayout() {
	function getLinkStyling({isActive, isPending, isTransitioning}) {
		return (isActive) ? 'HLAYOUT__active-link' : 'HLAYOUT__inactive-link';
	}
	return (
		<>
			<div className={'HLAYOUT__navbar-container'}>
				<div className={'HLAYOUT__nav-items-container'}>
					<NavLink to={'/host'}
							 className={getLinkStyling} end>
						{/* 'end' prop ensures that the NavLink will only be considered 'active' if it exactly
						 matches the nav url */}
						Dashboard
					</NavLink>
					<NavLink to={'/host/income'}
							 className={getLinkStyling}> Income < /NavLink>
					<NavLink to={'/host/vans'}
							 className={getLinkStyling}> Vans < /NavLink>

					<NavLink to={'/host/reviews'}
							 className={getLinkStyling}> Reviews < /NavLink>
				</div>
			</div>
			<Outlet/>
		</>
	);
}