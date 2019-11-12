import React, { useState, useContext } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from "./GenerateMap.module.scss";
import { withRouter } from "react-router-dom";
import IconButton from "../../Components/IconButton/IconButton";
import MapBar from "./MapBar/MapBar";
// import back from "../../assets/images/seta-anterior.svg";
// import next from "../../assets/images/seta-proximo.svg";
import InfoImg from "../../assets/images/Info.png";
import DetailsImg from "../../assets/images/details.png";
import LegendsImg from "../../assets/images/legends.png";
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
    const { user } = useContext(UserContext);

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

    return (
        <div>
            <MapBar onClickBasicMap={modifyBasicMap} onClickSaveMap={saveMap} setMapName={setMapName} />
            <div className={styles.body}>
                <div className={styles.leftMenu}>
                    <div className={styles.mapConfig}>
                        <IconButton icon={InfoImg} title={"Sobre"}></IconButton>
                        <IconButton icon={DetailsImg} title={"Conteúdo"}></IconButton>
                        <IconButton icon={LegendsImg} title={"Legendas"}></IconButton>
                    </div>
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