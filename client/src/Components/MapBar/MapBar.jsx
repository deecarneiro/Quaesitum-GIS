import React from 'react';
import MapButton from '../MapButton/MapButton'

//Images

import addMapImg  from '../../assets/images/addMap.png';
import saveMapImg from '../../assets/images/saveMap.png';
import changingImg from '../../assets/images/changingBaseMap.png';
import detailsImg from '../../assets/images/details.png';
import shareImg from "../../assets/images/share.png";

//Styles
import styles from "./MapBar.module.scss";


const MenuBar = () => {

    const left = "float: left";
    const right = "float: right"

    return (
        <div className={styles.mapBar} class="navbar navbar-expand-lg navbar-light bg-white">
            <div className={styles.left}>
                <MapButton icon={detailsImg} title={"Detalhes"}/>
                <MapButton icon={addMapImg} title={"Adicionar"}/>
                <MapButton icon={changingImg} title={"Mudar Mapa Base"}/>
            </div>
            <div className={styles.right}>
                <MapButton icon={saveMapImg} title={"Salvar Mapa"}/>
                <MapButton icon={shareImg} title={"Compartilhar"}/>
            </div>
        </div>
    )
}

export default MenuBar;