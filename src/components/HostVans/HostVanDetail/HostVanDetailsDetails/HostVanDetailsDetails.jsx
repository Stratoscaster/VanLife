import {HostVanDetailContext} from "../HostVanDetail.jsx";
import {useContext} from "react";

export default function HostVanDetails() {
    const {id, name, price, type, description, imageUrl} = useContext(HostVanDetailContext) ?? {};
    return (
        <>
            <div>
            <p><b>Name:</b> {name}</p>
            <p><b>Category:</b> {type}</p>
            <p><b>Description:</b> {description}</p>
            <p><b>Visibility:</b> {id}</p>
            </div>
        </>
    )
}

