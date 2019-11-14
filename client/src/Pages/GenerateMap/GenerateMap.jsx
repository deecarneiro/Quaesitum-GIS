import React, { useState, useContext, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from "./GenerateMap.module.scss";
import { withRouter } from "react-router-dom";
import MapBar from "./MapBar/MapBar";
// import back from "../../assets/images/seta-anterior.svg";
// import next from "../../assets/images/seta-proximo.svg";
import { mapService } from "../../Services";
import {UserContext} from "../../App";

const position = [-8.05428, -34.8813];
const basicMapsImages = [
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
]

const GenerateMap = props => {
    const { history } = props;
    const [markers, setMarkers] = useState([]);
    const [indexBasicMap, setIndexBasicMap] = useState(0);
    const [mapName, setMapName] = useState("");
    const { user, map, setMap } = useContext(UserContext);

    const modifyBasicMap = async () => {
        await setIndexBasicMap((indexBasicMap + 1) % basicMapsImages.length);
    }

    const addMarkers = async (event) => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;
        await setMarkers([...markers, { lat: lat, lng: lng }]);
    }

    const saveMap = async () => {
        const resp = await mapService.saveMap(user.id, mapName, markers);
        console.log(resp);
        history.push("/");
    }

    useEffect(() => {
        if(map.layers.length > 0){
            setMarkers(map.layers[0]); //primeira camada de pontos
            setMapName(map.name);
        }
        return setMap({
            id: "",
            name: "",
            layers: []
        });
    }, []);

    return (
        <div>
            <MapBar onClickBasicMap={modifyBasicMap} onClickSaveMap={saveMap} setMapName={setMapName} />
            <div className={styles.body}>
                <div className={styles.leftMenu}>
                    
                </div>
                <div className={styles.mapArea}>
                    <Map onClick={addMarkers} center={position} zoom={13}>
                        <TileLayer
                            url={basicMapsImages[indexBasicMap]}
                        />
                        {/* <Marker position={position}>
                     <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker> */}
                        {markers.map((marker, index) => {
                            let pos = [marker.lat, marker.lng]
                            return (
                                <Marker position={pos} key={index} />
                            )
                        })}
                    </Map>
                </div>
            </div>
        </div>
    )
}

export default withRouter(GenerateMap);