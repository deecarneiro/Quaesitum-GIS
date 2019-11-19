import React, { useState, useContext, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from "./GenerateMap.module.scss";
import { withRouter } from "react-router-dom";
import MapBar from "./MapBar/MapBar";
import { mapService } from "../../Services";
import { UserContext } from "../../App";
import Loading from "../../Components/Loading/Loading";

const position = [-8.05428, -34.8813];
const basicMapsImages = [
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
]

const GenerateMap = () => {
    const [indexBasicMap, setIndexBasicMap] = useState(0);
    const [mapPage, setMapPage] = useState({
        id: "",
        name: "",
        description: "",
        baseMap: basicMapsImages[indexBasicMap],
        layers: [{
            name: "",
            latLng: []
        }]
    });
    const [newMap, setNewMap] = useState(true);
    const [load, setLoad] = useState(false);
    const { user, map, setMap } = useContext(UserContext);

    const modifyBasicMap = async () => {
        await setIndexBasicMap((indexBasicMap + 1) % basicMapsImages.length);
    }

    const addMarkers = async (event) => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;
        let mapPage2 = { ...mapPage };
        mapPage2.layers[0].latLng.push({ lat: lat, lng: lng });

        await setMapPage(mapPage2);
    }

    const saveMap = async () => {
        setLoad(true);
        console.log(mapPage);
        let resp;
        if (newMap) {
            resp = await mapService.saveMap(user.id, mapPage);
        } else {
            resp = await mapService.updateMap(mapPage)
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

        }
        let coords = [];
        for (let i = 1; i < listText.length && i < 1000; i++) {
            const values = listText[i].split(";");
            if (values[latitude] && values[longitude]) {
                const obj = { lat: values[latitude], lng: values[longitude] }
                coords.push(obj);
            }
        }
        let mapPage2 = { ...mapPage };
        mapPage2.layers[0].latLng = coords;
        setMapPage(mapPage2);
        setLoad(false);
    }

    useEffect(() => {
        if (map.name) {
            console.log(map);
            let mapPage2 = { ...mapPage };
            mapPage2.layers = map.layers; 
            mapPage2.name = map.name;
            mapPage2.description = map.description;
            mapPage2.id = map._id;
            setNewMap(false);
            setMapPage(mapPage2);
        }
        return setMap({
            id: "",
            name: "",
            layers: []
        });
    }, []);

    const _setDescription = (event) => {
        let mapPage2 = { ...mapPage };
        mapPage2.description = event.target.value;
        setMapPage(mapPage2);
    }

    return (
        <div>
            {load ?
                <Loading />
                :
                <MapBar onClickBasicMap={modifyBasicMap} onClickSaveMap={saveMap} setMapPage={setMapPage}
                    importMap={importMap} mapPage={mapPage} newMap={newMap} />
            }
            <div className={styles.body}>
                <div className={styles.leftMenu}>
                    <div className={styles.wrapContent}>
                        <textarea className={styles.description} placeholder="Descrição..."
                            onChange={_setDescription} value={mapPage.description} />
                    </div>
                </div>
                <div className={styles.mapArea}>
                    <Map onClick={addMarkers} center={position} zoom={13}>
                        <TileLayer
                            url={basicMapsImages[indexBasicMap]}
                        />
                        {mapPage.layers[0].latLng.map((marker, index) => {
                            let pos = [marker.lat, marker.lng]
                            return (
                                <Marker position={pos} key={index}>
                                    <Popup>popup</Popup>
                                </Marker>
                            )
                        })}
                    </Map>
                </div>
            </div>
        </div>
    )
}

export default GenerateMap;