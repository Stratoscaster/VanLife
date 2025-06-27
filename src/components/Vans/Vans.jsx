import React from "react";
import './Vans.css'
import Van from './Van.jsx'

export default function Vans() {
	const [vans, setVans] = React.useState([])
	React.useEffect(() => {
		fetch('/api/vans').then(response => {
			response.json().then(
				body => {
					setVans(body.vans)
				}
			)
		}).catch(err => console.error(err))
	}, [])

	const vanElements = [];

	for (const van of vans) {
		vanElements.push(
			<Van
				id={van.id}
				name={van.name}
				price={van.price}
				description={van.description}
				imageUrl={van.imageUrl}
				type={van.type}
				key={van.id}/>
		)
	}

	return (
		<>

			<div className={'vans-page-container'}>
				<div className={'vans-list-container'}>
					<div>
						<h1>Explore our van options</h1>
					</div>
					<div className={"vans-list-grid"}>
						{vanElements}
					</div>
				</div>
			</div>
		</>
	)
}