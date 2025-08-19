import {useContext} from "react";
import {HostVanDetailContext} from "../HostVanDetail.jsx";


export default function HostVanDetailsPhotos() {
    const {id, name, price, type, description, imageUrl} = useContext(HostVanDetailContext) ?? {};

    return (
        <>
            PHOTOS
        </>
    )
}

