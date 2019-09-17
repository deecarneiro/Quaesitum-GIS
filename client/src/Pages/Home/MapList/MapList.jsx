import React from "react";
import MapItem from "./MapItem/MapItem";

const MapList = (props) => {

    const { listMap } = props;
    return (
        listMap.map((mapItem, index) => {
            return (
                <MapItem name={mapItem.name} img={mapItem.img} key={index}/>
            )
        })
    )
}

export default MapList;