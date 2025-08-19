import {useContext} from "react";
import {HostVanDetailContext} from "../HostVanDetail.jsx";


export default function HostVanDetailsPricing() {
    const {id, name, price, type, description, imageUrl} = useContext(HostVanDetailContext) ?? {};

    return (
        <>
            PRICING
        </>
    )
}

