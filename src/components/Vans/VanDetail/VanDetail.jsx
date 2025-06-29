import React from 'react';
import {useParams} from "react-router-dom";
import './VanDetail.css'
import {Link} from 'react-router-dom';
export default function VanDetail({props}) {
	// Get the params from the Link that led to this VanDetail
	const params = useParams()
	console.log(JSON.stringify(params, null, 2))
	const id = params.id;
	const [van, setVan] = React.useState({})
	React.useEffect(() => {
		fetch(`/api/vans/${id}`).then(response => {
			response.json().then(data => {
					setVan(data)
				}
			).catch(error => {
				console.error(error)
			})
		}).catch(error => {
			console.error(error)
		})
	}, [id])


	return (
		<div className={'detail-page-container'}>
			<div className={'back-link-container'}>
				<Link to={'/vans'}>Back to all vans</Link>
			</div>
			<div className={'van-container'}>

			</div>
		</div>
	)
}