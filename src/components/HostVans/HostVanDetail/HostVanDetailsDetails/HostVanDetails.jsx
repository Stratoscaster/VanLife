import {HostVanDetailContext} from "../HostVan.jsx";
import {useContext} from "react";
import {titleCaseString} from "../../../../utils/utils.js";

export default function HostVanDetails() {
    const {id, name, price, type, description, imageUrl} = useContext(HostVanDetailContext).currentVan ?? {};
    return (
        <>
            <div>
            <p><b>Name:</b> {name}</p>
            <p><b>Category:</b> {titleCaseString(type)}</p>
            <p><b>Description:</b> {description}</p>
            <p><b>Visibility:</b> {id}</p>
            </div>
        </>
    )
}

