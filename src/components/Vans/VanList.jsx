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