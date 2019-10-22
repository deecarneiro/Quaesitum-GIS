import React from 'react';


//Images

import addMapImg  from '../../assets/images/addMap.png';
import saveMapImg from '../../assets/images/saveMap.png';
import changingImg from '../../assets/images/changingBaseMap.png';
import detailsImg from '../../assets/images/details.png';
import shareImg from "../../assets/images/share.png";

//Styles
import styles from "./MapBar.module.scss";

//Components
import DropDownButton from '../DropDownButton/DropDownButton';
import IconButton from '../IconButton/IconButton';



const MenuBar = () => {

    const left = "float: left";
    const right = "float: right"

    return (
        <div className={`${styles.mapBar} navbar navbar-expand-lg navbar-light bg-white`} >
            <div className={styles.left}>
                <IconButton icon={detailsImg} title={"Detalhes"}/>
                
                <DropDownButton icon={addMapImg} title={"Adicionar"}>
                <a className="dropdown-item bg-white">Teste 01</a>
                </DropDownButton>
                <IconButton icon={changingImg} title={"Mudar Mapa Base"}/>
            </div>
            <div className={styles.right}>
                <IconButton icon={saveMapImg} title={"Salvar Mapa"}/>
                <IconButton icon={shareImg} title={"Compartilhar"}/>
            </div>
        </div>
    )
}

export default MenuBar;