import React from "react";
import styles from "./Home.module.scss";
import MapList from "./MapList/MapList";
import ConstantList from "./ConstantList";

const Home = () => {

    const list = ConstantList;
    //const list = null;

    const contentMap = (list !== null && list.length !== 0) ? <MapList listMap={list} /> :
        <p className={styles.message}>Nenhum mapa salvo!</p>;

    return (
        <>
            <div className={styles.titleArea}>
                <h3>Mapas</h3>
            </div>
            <div className={styles.contentMaps}>
                {contentMap}
            </div>
        </>
    )
}

export default Home;