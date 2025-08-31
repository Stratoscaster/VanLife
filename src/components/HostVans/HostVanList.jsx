import React from 'react';
import './HostVanList.css';
import HostVanListItem from "./HostVanListItem.jsx";
import {RotatingLines} from "react-loader-spinner";

export default function HostVanList() {
    const [vans, setVans] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
        setIsLoaded(false);
        fetch('/api/host/vans').then(
            response => {
                response.json().then(
                    body => {
                        setVans(body.vans);
                        setIsLoaded(true);
                    }
                ).catch(err => console.error(err))
            }
        ).catch(err => {
            console.error(err);
            setIsLoaded(true);

        })
    }, [])

    const vanElements = [];

    for (const van of vans) {
        vanElements.push(
            <HostVanListItem
                id={van.id}
                name={van.name}
                price={van.price}
                imageUrl={van.imageUrl}
                key={van.id}
            />
        )
    }

    const loaderStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30vh'
    }


    return (
        <>
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
                    <div className={'HVANS__flex-center'}>
                        <div className={'HVANS__flex-columns'}>
                            <h2>Your Listed Vans</h2>
                            {vanElements}
                        </div>
                    </div>
            }
        </>
    )
}