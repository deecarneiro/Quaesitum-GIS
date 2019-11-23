import React, { useState, useContext, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from "./GenerateMap.module.scss";
import MapBar from "./MapBar/MapBar";
import { mapService } from "../../Services";
import { UserContext } from "../../App";
import Loading from "../../Components/Loading/Loading";

const position = [-8.05428, -34.8813];
const basicMapsImages = [
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
]

const GenerateMap = props => {
    const { withMap } = props;
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
    const [layersSelected, setLayersSelected] = useState([0]);
    const { user, map } = useContext(UserContext);
    const modifyBasicMap = async () => {
        await setIndexBasicMap((indexBasicMap + 1) % basicMapsImages.length);
    }

    const addMarkers = async (event) => {
        if (layersSelected.length === 1) {
            const lat = event.latlng.lat;
            const lng = event.latlng.lng;
            let mapPage2 = { ...mapPage };
            mapPage2.layers[layersSelected[0]].latLng.push({ lat: lat, lng: lng });

            await setMapPage(mapPage2);
        } else {
            alert("Para adicionar pontos você precisa especificar a camada");
        }
    }

    const addLayer = () => {
        let mapPage2 = { ...mapPage };
        mapPage2.layers.push({
            name: "",
            latLng: []
        })
        setMapPage(mapPage2);
    }

    const selectLayer = (layerClick) => {
        const index = layersSelected.findIndex((layer) => layer === layerClick);
        let newLayers = [...layersSelected];
        if (index === -1) {
            newLayers.push(layerClick);
            setLayersSelected(newLayers);
            return true;
        } else {
            if (layersSelected.length > 1) {
                newLayers.splice(index, 1);
                setLayersSelected(newLayers);
                return true;
            } else {
                alert("É necessário ter ao menos uma camada selecionada");
                return false;
            }
        }
    }

    const saveMap = async () => {
        setLoad(true);
        let resp;
        if (newMap) {
            resp = await mapService.saveMap(user.id, mapPage);
        } else {
            resp = await mapService.updateMap(mapPage)
        }
        sessionStorage.setItem("map", JSON.stringify(mapPage));
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
        console.log(map);
        if (withMap) {
            console.log(withMap);
            let mapPage2 = { ...mapPage };
            mapPage2.layers = map.layers;
            mapPage2.name = map.name;
            mapPage2.description = map.description;
            mapPage2.id = map._id;
            setNewMap(false);
            setMapPage(mapPage2);
        }
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
                <MapBar onClickBasicMap={modifyBasicMap} onClickSaveMap={saveMap}
                    setMapPage={setMapPage} importMap={importMap} mapPage={mapPage}
                    newMap={newMap} addLayer={addLayer} selectLayer={selectLayer} />
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
                        {layersSelected.map((layerSelected) => {
                            return (
                                mapPage.layers[layerSelected].latLng.map((marker, index) => {
                                    let pos = [marker.lat, marker.lng]
                                    return (
                                        <Marker position={pos} key={index}>
                                            <Popup>popup</Popup>
                                        </Marker>
                                    )
                                })
                            )
                        })}
                    </Map>
                </div>
            </div>
        </div>
    )
}

export default GenerateMap;