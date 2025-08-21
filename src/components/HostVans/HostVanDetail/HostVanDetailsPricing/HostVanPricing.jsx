import {useContext} from "react";
import {HostVanDetailContext} from "../HostVan.jsx";


export default function HostVanPricing() {
    const {id, name, price, type, description, imageUrl} = useContext(HostVanDetailContext).currentVan ?? {};

    return (
        <>
            { price &&
                <>
                <h4>Current Pricing:</h4>
                    ${price}/day
                </>
            }
        </>
    )
}

