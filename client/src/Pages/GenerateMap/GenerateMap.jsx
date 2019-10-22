import React, {useState, useEffect} from "react";

//Styles
import styles from "./GenerateMap.module.scss";

//Components
import MapBar from "../../Components/MapBar/MapBar"
import ExpansiveMenu from "../../Components/ExpansiveMenu/ExpansiveMenu";
import Button from "../../Components/Button/Button";
import IconButton from "../../Components/IconButton/IconButton"

//Images
// import back from "../../assets/images/seta-anterior.svg";
// import next from "../../assets/images/seta-proximo.svg";
import InfoImg from "../../assets/images/Info.png"
import DetailsImg from "../../assets/images/details.png";
import LegendsImg from "../../assets/images/legends.png";

//Leaflet Components
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const mockMarkers = [
    {lat: -8.06071151548281, lng: -34.95375663042069},
    {lat: -8.067510073139267, lng: -34.946718513965614},
    {lat: -8.073628677270763, lng: -34.937448799610145},
    {lat: -8.05000355553738, lng: -34.939165413379676},
     {lat: -8.059351790238782, lng: -34.926977455616004},
     {lat: -8.057482160567835, lng: -34.93727713823319},
     {lat: -8.057482160567835, lng: -34.93727713823319}
]

const position = [-8.05428,-34.8813];

const GenerateMap = () => {

    const [markers, setMarkers] = useState([]);

    const addMarkers = async (event) => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;
        console.log("---", lat, lng);
        await setMarkers([...markers, {lat: lat, lng: lng}]);
        console.log(markers);
    }

    useEffect(() => {
        setMarkers(mockMarkers);
    }, [])

    return (            
    <div>
        <MapBar></MapBar>
        <div className={styles.body}>
            <div className={styles.leftMenu}>
                <div className={styles.mapConfig}>
                   <IconButton icon={InfoImg} title={"Sobre"}></IconButton>
                   <IconButton icon={DetailsImg} title={"Conteúdo"}></IconButton>
                   <IconButton icon={LegendsImg} title={"Legendas"}></IconButton>
                </div>
                <ExpansiveMenu title="Propriedades do Mapa">
                    <p>Teste 1</p>
                    <p>Teste 2</p>
                    <p>Teste 3</p>
                </ExpansiveMenu>
                <ExpansiveMenu title="Camadas">
                    <p>Teste 1</p>
                    <p>Teste 2</p>
                    <p>Teste 3</p>
                </ExpansiveMenu>
                <ExpansiveMenu title="Dados">
                    <p>Teste 1</p>
                    <p>Teste 2</p>
                    <p>Teste 3</p>
                </ExpansiveMenu>
                <ExpansiveMenu title="Compartilhar">
                    <p>Teste 1</p>
                    <p>Teste 2</p>
                    <p>Teste 3</p>
                </ExpansiveMenu>
            </div>
            <div className={styles.mapArea}>
            <Map onClick={addMarkers} center={position} zoom={13}>
               <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {/* <Marker position={position}>
                     <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker> */}
                {markers.map((marker) => {
                    let pos = [marker.lat, marker.lng]
                    return(
                        <Marker position={pos} ></Marker>
                    )
                })}
                </Map>
            </div>
        </div>
        </div>
    )
}

export default GenerateMap;