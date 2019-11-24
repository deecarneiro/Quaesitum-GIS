import React, { useState, useEffect, useContext } from "react";
import styles from "./Home.module.scss";
import MapList from "./MapList/MapList";
import Loading from "../../Components/Loading/Loading";
import { userService } from "../../Services";
import { UserContext } from "../../App";

const Home = () => {
    const [load, setLoad] = useState(false);
    const [list, setList] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        setLoad(true);
        userService.getMaps(user.id).then((maps) => {
            setList(maps.data);
            setLoad(false);
        }).catch((error) => {
            alert("Algo deu errado");
            setLoad(false);
        });
    }, []);

    const contentMap = (list.length !== 0) ? <MapList listMap={list} /> :
        <p className={styles.message}>Nenhum mapa salvo!</p>;
    return (
        <>
            <div className={styles.titleArea}>
                <h3>Mapas</h3>
            </div>
            {load ? <Loading message="Carregando" /> :
                <div className={styles.contentMaps}>
                    {contentMap}
                </div>}
        </>
    )
}

export default Home;