import {useContext} from "react";
import {HostVanDetailContext} from "../HostVan.jsx";


export default function HostVanPhotos() {
    const {id, name, price, type, description, imageUrl} = useContext(HostVanDetailContext).currentVan ?? {};
    const photoStyle = {
        width: "50%",
        justifySelf: "center",
        alignSelf: "center",
        borderRadius: "50%",
    }
    return (
        <>
            <img src={imageUrl}
                 style={photoStyle}
                 alt={name + ", " + type} />
        </>
    )
}

