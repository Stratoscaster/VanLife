import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import './VanDetail.css'
import {BsArrowLeft} from "react-icons/bs";
import VanBadge from "../VanBadge/VanBadge.jsx";
import {titleCaseString} from "../../../utils/utils.js";
import {getVan} from "../../../api.js";

export default function VanDetail() {
	// Get the params from the Link that led to this VanDetail
	const params = useParams()
	console.log(JSON.stringify(params, null, 2))
	const id = params.id;
	const [van, setVan] = React.useState({})
    const location = useLocation()
    console.log('location:', location);

	// Retrieve van detail using fetch if id changes
	React.useEffect(() => {
		getVan(id).then(vanData => {
            setVan(vanData)
        });
	}, [id])
	const {name, price, description, imageUrl, type} = van

    // Check for a previous search in the state
    const previousSearch = '?' + location.state?.search || '';


	return (
		<div className={'VDetail__detail-page-container'}>
			<div className={'VDetail__detail-items-container'}>
				<div className={'VDetail__back-link-container'}>
                    {/* Include the filters from location state that was stored when clicking on the VanListItem */}
					<Link to={`/vans${previousSearch}`}>
						<div className={'VDetail__back-link-content'}>
							<div>
								<BsArrowLeft color={'gray'}/>
								<p>
									Back to {titleCaseString(location.state?.type || 'All')} Vans
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