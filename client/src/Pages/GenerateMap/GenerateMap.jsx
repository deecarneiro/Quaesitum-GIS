import React, { useState, useContext, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from "./GenerateMap.module.scss";
import { withRouter } from "react-router-dom";
import MapBar from "./MapBar/MapBar";
// import back from "../../assets/images/seta-anterior.svg";
// import next from "../../assets/images/seta-proximo.svg";
import { mapService } from "../../Services";
import { UserContext } from "../../App";
import Loading from "../../Components/Loading/Loading";

const position = [-8.05428, -34.8813];
const basicMapsImages = [
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
]

const GenerateMap = props => {
    const [markers, setMarkers] = useState([]);
    const [indexBasicMap, setIndexBasicMap] = useState(0);
    const [mapName, setMapName] = useState("");
    const [description, setDescription] = useState("");
    const { user, map, setMap } = useContext(UserContext);
    const [newMap, setNewMap] = useState(true);
    const [load, setLoad] = useState(false);

    const modifyBasicMap = async () => {
        await setIndexBasicMap((indexBasicMap + 1) % basicMapsImages.length);
    }

    const addMarkers = async (event) => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;
        await setMarkers([...markers, { lat: lat, lng: lng }]);
    }

    const saveMap = async () => {
        setLoad(true);
        let resp;
        if(!newMap){
            resp = await mapService.saveMap(user.id, mapName, markers, description, basicMapsImages[indexBasicMap]);
        }else{
            resp = await mapService.updateMap(user.id, mapName)
        }
        console.log(resp);
        setLoad(false);
    }

    const importMap = event => {
        if (event.target) {
            const leitorCSV = new FileReader();
            const file = event.target.files[0];
            leitorCSV.readAsText(file);
            leitorCSV.onload = lerCSV;
        }
    }

    const lerCSV = event => {
        setLoad(true);
        const listText = event.target.result.split("\n");
        const properties = listText[0].split(";");
        let latitude, longitude;
        for (let i = 0; i < properties.length; i++) {
            if (properties[i].trim() === "latitude") {
                latitude = i;
            }
            if (properties[i].trim() === "longitude") {
                longitude = i;
            }
            //console.log(properties[i]);
        }
        let coords = [];
        for (let i = 1; i < listText.length && i < 1000; i++) {
            const values = listText[i].split(";");
            //console.log(values);
            if (values[latitude] && values[longitude]) {
                const obj = { lat: values[latitude], lng: values[longitude] }
                //console.log(obj);
                coords.push(obj);
            }
        }
        setMarkers(coords);
        setLoad(false);
    }

    useEffect(() => {
        if (map.layers && map.layers.length && map.layers.length > 0) {
            console.log(map);
            setMarkers(map.layers[0].latLng); //primeira camada de pontos
            setMapName(map.name);
            setDescription(map.description);
            setNewMap(false);
        }
        return setMap({
            id: "",
            name: "",
            layers: []
        });
    }, []);

    const _setDescription = (event) => {
        setDescription(event.target.value);
    }

    return (
        <div>
            {load ?
                <Loading />
                :
            <MapBar onClickBasicMap={modifyBasicMap} onClickSaveMap={saveMap} setMapName={setMapName} 
                importMap={importMap} mapName={mapName} newMap={newMap}/>
            }
            <div className={styles.body}>
                <div className={styles.leftMenu}>
                    <div className={styles.wrapContent}>
                        <textarea className={styles.description} placeholder="Descrição..." 
                            onChange={_setDescription} value={description}/>
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

export default GenerateMap;