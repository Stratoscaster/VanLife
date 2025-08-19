import React from 'react';
import {Link, NavLink, Outlet, useParams} from "react-router-dom";
import './HostVanDetail.css';
import {BsArrowLeft} from "react-icons/bs";
import VanBadge from "../../Vans/VanBadge/VanBadge.jsx";

const HostVanDetailContext = React.createContext({});

export default function HostVanDetail() {
    function getLinkStyling({isActive, isPending, isTransitioning}) {
        return (isActive) ? 'HLAYOUT__active-link' : 'HLAYOUT__inactive-link';
    }
    const params = useParams();
    const id = params.id;
    const [van, setVan] = React.useState({})
    React.useEffect(() => {
        fetch(`/api/vans/${id}`).then(response => {
            response.json().then(data => {
                setVan(data.vans)
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    }, [id]);

    const {name, price, type, description, imageUrl} = van;

	return (
		<>
            <div className={'HVD__page_container'}>
                <div className={'HVD__backlink-container'}>
                    <Link to={'/host/vans'}>
                        <div className={'HVD__back-link-content'}>
                            <div>
                                <BsArrowLeft color={'gray'}/>
                                <p>
                                    Back to all vans
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={'HVD__content_container'}>
                    <div className={'HVD__content_header'}>
                        <div className={'HVD__header_image_container'}>
                            <img src={imageUrl}/>
                        </div>
                        <div className={'HVD__header_title_container'}>
                            <VanBadge type={type}/>
                            <h1>{name}</h1>
                            <div className={'HVD__header_price'}>
                                <h2>${price}</h2>
                                <h3>/day</h3>
                            </div>
                        </div>
                    </div>
                    <div className={'HVD__content_links_container'}>
                        <NavLink to={`/host/vans/${id}`}
                                 className={getLinkStyling} end>
                            {/* 'end' prop ensures that the NavLink will only be considered 'active'
                            if it exactly matches the nav url */}
                            Details
                        </NavLink>
                        <NavLink to={`/host/vans/${id}/pricing`}
                                 className={getLinkStyling}> Pricing < /NavLink>
                        <NavLink to={`/host/vans/${id}/photos`}
                                 className={getLinkStyling}> Photos < /NavLink>
                    </div>
                    <div className={'HVD__content_outlet_container'}>
                        <HostVanDetailContext.Provider value={van}>
                            <Outlet/>
                        </HostVanDetailContext.Provider>
                    </div>
                </div>
            </div>
        </>
	)
}

export {HostVanDetailContext}