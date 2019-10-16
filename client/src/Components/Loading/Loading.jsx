import React from "react";
import globo from "../../assets/images/globo-icon.png";
import styles from "./Loading.module.scss";

const Loading = props => {
    const msg = props.message ? props.message : "Carregando";
    return (
        <div className={styles.loading}>
            <img src={globo} alt="_" />
            <span>{msg}...</span>
        </div>
    )
}

export default Loading;