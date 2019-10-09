import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import MapList from "./MapList/MapList";
import ConstantList from "./ConstantList";
import Loading from "../../Components/Loading/Loading";
const Home = () => {
    const [load, setLoad] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        setLoad(true);
        setTimeout(() => {
            setList(ConstantList);
            setLoad(false);
        }, 3000);
    }, []);

    const contentMap = (list.length !== 0) ? <MapList listMap={list} /> :
        <p className={styles.message}>Nenhum mapa salvo!</p>;

    return (
        <>
            <div className={styles.titleArea}>
                <h3>Mapas</h3>
            </div>
            {load ? <Loading message="Carregando"/> :
                <div className={styles.contentMaps}>
                    {contentMap}
                </div>}
        </>
    )
}

export default Home;