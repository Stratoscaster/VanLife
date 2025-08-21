import React from "react";
import {useSearchParams} from "react-router-dom";
import './VanList.css'
import VanListItem from './VanListItem.jsx'

export default function VanList() {
    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get('type');
    console.log('typeFilter:', typeFilter);

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
    const filteredVans = vans.filter(van => {
        return (!typeFilter || van.type.toLowerCase() === typeFilter.toLowerCase())
    });
    for (const van of filteredVans) {
        vanElements.push(
            <VanListItem
                id={van.id}
                name={van.name}
                price={van.price}
                description={van.description}
                imageUrl={van.imageUrl}
                type={van.type}
                key={van.id}/>
        )
    }

    function genNewSearchParamString(key, value) {
        //     Can be used to generate query strings for Links manually
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(key);
        } else {
            sp.set(key, value);
        }
        return `?${sp.toString()}`; // Return query string with prepended ? symbol
    }

    function handleFilterChange(key, value) {
        // This one is an exception to state callback - you can make changes to the original value & don't have to make a copy.
        setSearchParams(previousParams => {
            if (value === null) {
                previousParams.delete(key);
            } else {
                previousParams.set(key, value);
            }
            return previousParams;
        })
    }

    return (
        <>

            <div className={'vans-page-container'}>
                <div className={'vans-list-container'}>
                    <div>
                        <h1>Explore our van options</h1>
                        <div className={'VLIST__van-filter-contain'}>
                            {/* Example using genNewSearchParamString */}
                            {/*<Link to={genNewSearchParamString('type', 'simple')} className={'van-type simple'}>Simple</Link>*/}

                            {/* Using Links & Hardcoded URLs */}
                            {/*<Link to={"?type=simple"} className={'van-type simple'}>Simple</Link>*/}
                            {/*<Link to={"?type=rugged"} className={'van-type rugged'}>Rugged</Link>*/}
                            {/*<Link to={"?type=luxury"} className={'van-type luxury'}>Luxury</Link>*/}
                            {/*<Link to={"."} className={'van-type clear-filters'}>Clear</Link>*/}
                            {/* Using Buttons and setSearchParams */}
                            {/* setSearchParams can accept either strings (e.g. "type=simple" ) or objects (e.g. {type: 'simple'} ) */}
                            <button className={`van-type simple ${typeFilter==='simple' ? 'selected' : ''}`} onClick={() => {
                                handleFilterChange('type', 'simple')
                            }}>Simple
                            </button>
                            <button className={`van-type rugged ${typeFilter==='rugged' ? 'selected' : ''}`} onClick={() => {
                                handleFilterChange('type', 'rugged')
                            }}>Rugged
                            </button>
                            <button className={`van-type luxury ${typeFilter==='luxury' ? 'selected' : ''}`} onClick={() => {
                                handleFilterChange('type', 'luxury')
                            }}>Luxury
                            </button>
                            {
                                typeFilter !== null &&
                                <button className={`van-type clear-filter`} onClick={() => {
                                    handleFilterChange('type', null)
                                }}>Clear</button>
                            }

                        </div>
                        <div className={"vans-list-grid"}>
                            {vanElements}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}