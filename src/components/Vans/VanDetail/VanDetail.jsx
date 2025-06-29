import React from 'react';
import {Link, useParams} from "react-router-dom";
import './VanDetail.css'
import {BsArrowLeft} from "react-icons/bs";
import VanBadge from "../VanBadge/VanBadge.jsx";

export default function VanDetail() {
	// Get the params from the Link that led to this VanDetail
	const params = useParams()
	console.log(JSON.stringify(params, null, 2))
	const id = params.id;
	const [van, setVan] = React.useState({})

	// Retrieve van detail using fetch if id changes
	React.useEffect(() => {
		fetch(`/api/vans/${id}`).then(response => {
			response.json().then(data => {
					setVan(data.vans)
				}
			).catch(error => {
				console.error(error)
			})
		}).catch(error => {
			console.error(error)
		})
	}, [id])
	const {name, price, description, imageUrl, type} = van


	return (
		<div className={'VDetail__detail-page-container'}>
			<div className={'VDetail__detail-items-container'}>
				<div className={'VDetail__back-link-container'}>
					<Link to={'/vans'}>
						<div className={'VDetail__back-link-content'}>
							<div>
								<BsArrowLeft color={'gray'}/>
								<p>
									Back to all vans
								</p>
							</div>
						</div>
					</Link>
				</div>
				<div className={'VDetail__container'}>
					<div className={'VDetail__image-container'}>
						<img src={imageUrl}/>
					</div>
					<VanBadge type={type}/>
					<div className={'VDetail__name-container'}>
						{name}
					</div>
					<div className={'VDetail__price-container'}>
						<span>${price}</span>/day
					</div>
					<div className={'VDetail__description-container'}>
						<p>{description}</p>
					</div>
					<div className={'VDetail__rent-button-container'}>
						<button className={'VDetail__rent-button'}>Rent this van</button>
					</div>
				</div>
			</div>
		</div>
	)
}