import "leaflet/dist/leaflet.css"

import { Icon } from "leaflet"
import { MapContainer, Marker, TileLayer } from "react-leaflet"

export interface Coords {
    lat : number,
    long : number,
    url? : string | null
}

export default function Map({lat, long, url} : Coords) {
    const mIcon = new Icon({ iconUrl: "./assets/marker.png", iconSize : [40, 40] })

    return (
        <MapContainer 
            className="w-full h-5/6 relative z-10"
            center={[lat, long]}
            zoom={15}
        >
            <Marker 
                icon={mIcon}
                position={[lat, long]}
            />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    )
}