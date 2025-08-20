import React from 'react';
import {Link, NavLink, Outlet, useParams} from "react-router-dom";
import './HostVan.css';
import {BsArrowLeft} from "react-icons/bs";
import VanBadge from "../../Vans/VanBadge/VanBadge.jsx";
import {RotatingLines} from "react-loader-spinner";

const HostVanDetailContext = React.createContext({});

export default function HostVan() {
    function getLinkStyling({isActive, ...rest}) {
        return (isActive) ? 'HLAYOUT__active-link' : 'HLAYOUT__inactive-link';
    }

    const params = useParams();
    const id = params.id;
    const [van, setVan] = React.useState({})
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
        setIsLoaded(false);
        fetch(`/api/vans/${id}`).then(response => {
            response.json().then(data => {
                setVan(data.vans)
                setIsLoaded(true);
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    }, [id]);

    const {name, price, type, description, imageUrl} = van;
    const loaderStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30vh'
    }
    return (
        <>
            <div className={'HVD__page_container'}>
                <div className={'HVD__backlink-container'}>
                    <Link to={'../'} relative={"path"}>
                        {/* 'relative="path"' prop means that the link is relative to path
                            structure and not relative to Route hierarchy. */}
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
                {
                    // Loading spinner to prevent portions of component
                    // from loading at different times
                    !isLoaded ?
                        <div style={loaderStyle}>
                            <RotatingLines
                                strokeColor={'grey'}
                                strokeWidth={"5"}
                                animationDuration={"0.75"}
                                width={"96"}
                                visible={true}
                            />
                        </div>
                        :
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
                                <NavLink to={`.`}
                                         className={getLinkStyling} end>
                                    {/* 'end' prop ensures that the NavLink will only be considered 'active'
                            if it exactly matches the nav url */}
                                    Details
                                </NavLink>
                                <NavLink to={`./pricing`}
                                         className={getLinkStyling}> Pricing < /NavLink>
                                <NavLink to={`./photos`}
                                         className={getLinkStyling}> Photos < /NavLink>
                            </div>
                            <div className={'HVD__content_outlet_container'}>
                                <HostVanDetailContext.Provider value={{currentVan: van}}>
                                    <Outlet/>
                                </HostVanDetailContext.Provider>
                            </div>
                        </div>

                }
            </div>
        </>
    )
}

export {HostVanDetailContext}