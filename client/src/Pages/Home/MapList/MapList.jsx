import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import MapItem from "./MapItem/MapItem";
import { userService } from '../../../Services/index';

const MapList = (props) => {
    const { listMap, history } = props;
    const { setMap } = useContext(userService); 

    return (
        listMap.map((mapItem) => {
            const _setMap = async (mapItem) => {
                await setMap(mapItem);
                history.push("/generateMap");
            }
            return (
                <MapItem name={mapItem.name} img={mapItem.img} 
                setMap={_setMap} key={mapItem.id}/>
            )
        })
    )
}

export default withRouter(MapList);