import React from 'react';


//Images

import addMapImg from '../../../assets/images/addMap.png';
import saveMapImg from '../../../assets/images/saveMap.png';
import changingImg from '../../../assets/images/changingBaseMap.png';
import detailsImg from '../../../assets/images/details.png';
import shareImg from "../../../assets/images/share.png";

//Styles
import styles from "./MapBar.module.scss";

//Components
import DropDownButton from '../../../Components/DropDownButton/DropDownButton';
import IconButton from '../../../Components/IconButton/IconButton';



const MenuBar = props => {

    const { onClickBasicMap, onClickSaveMap, setMapName } = props;



    return (
        <div className={`${styles.mapBar} navbar navbar-expand-lg navbar-light bg-white`} >
            <div className={styles.divOptions}>
                <IconButton icon={detailsImg} title={"Detalhes"} />

                <DropDownButton icon={addMapImg} title={"Adicionar"}>
                    <a className="dropdown-item bg-white">Teste 01</a>
                </DropDownButton>

                <IconButton icon={changingImg} title={"Mudar Mapa Base"} onClick={onClickBasicMap} />
            </div>
            <div className={styles.divOptions}>
                <input type="text" className="form-control" placeholder="Título do mapa"
                    onChange={(event) => setMapName(event.target.value)} />
                <IconButton icon={saveMapImg} title={"Salvar Mapa"} onClick={onClickSaveMap} />
                <IconButton icon={shareImg} title={"Compartilhar"} />
            </div>
        </div>
    )
}

export default MenuBar;