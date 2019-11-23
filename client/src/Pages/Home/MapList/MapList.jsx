import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import MapItem from "./MapItem/MapItem";
import { UserContext } from "../../../App";

const MapList = (props) => {
    const { listMap, history } = props;
    const { setMap } = useContext(UserContext); 

    return (
        listMap.map((mapItem) => {
            const _setMap = async () => {
                await setMap(mapItem);
                sessionStorage.setItem("map", JSON.stringify(mapItem));
                console.log(mapItem);
                history.push("/generateMap/map");
            }
            return (
                <MapItem name={mapItem.name} img={mapItem.img} 
                setMap={_setMap} key={mapItem.id}/>
            )
        })
    )
}

export default withRouter(MapList);