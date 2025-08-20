import {useContext} from "react";
import {HostVanDetailContext} from "../HostVan.jsx";


export default function HostVanPhotos() {
    const {id, name, price, type, description, imageUrl} = useContext(HostVanDetailContext) ?? {};

    return (
        <>
            PHOTOS
        </>
    )
}

