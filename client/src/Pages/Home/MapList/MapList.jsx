import React, { useContext } from "react";
import MapItem from "./MapItem/MapItem";
import { userService } from '../../../Services/index';

const MapList = (props) => {
    const { listMap } = props;
    const { setMap } = useContext(userService); 

    return (
        listMap.map((mapItem) => {
            const _setMap = (mapItem) => {
                setMap(mapItem);
            }
            return (
                <MapItem name={mapItem.name} img={mapItem.img} 
                setMap={_setMap} key={mapItem.id}/>
            )
        })
    )
}

export default MapList;