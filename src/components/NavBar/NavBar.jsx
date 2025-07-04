import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
	return (
		<div className={"navbar-container-centering"}>
			<span>
				<h1>#VANLIFE</h1>
				<div className={"navbar-items-container"}>
					<nav>
						<Link to={"/"}>Home</Link>
						<Link to={'/vans'}>Vans</Link>
						<Link to={'/host/dashboard'}>Host</Link>
						{/*<Link to={'/host/income'}>Income</Link>*/}
						{/*<Link to={'/host/reviews'}>Reviews</Link>*/}
						<Link to={"/about"}>About</Link>
					</nav>
				</div>
			</span>
		</div>
	)
}