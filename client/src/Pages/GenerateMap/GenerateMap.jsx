import React from "react";
import styles from "./GenerateMap.module.scss";
import MapBar from "../../Components/MapBar/MapBar"
import ExpansiveMenu from "../../Components/ExpansiveMenu/ExpansiveMenu";
import Button from "../../Components/Button/Button";
import back from "../../assets/images/seta-anterior.svg";
import next from "../../assets/images/seta-proximo.svg";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [-8.05428,-34.8813];

const GenerateMap = () => {
    return (
        <div className={styles.body}>
        <div className={styles.mapBar}>
            <MapBar />
        </div>
            <div className={styles.leftMenu}>
                <div className={styles.mapConfig}>
                    <div className={styles.arrows}>
                        <button><img src={back}/></button>
                        <button><img src={next}/></button>
                    </div>
                    <Button text="Salvar Mapa" blue/>
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
            <Map center={position} zoom={13}>
               <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                     <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
                </Map>
            </div>
        </div>
    )
}

export default GenerateMap;