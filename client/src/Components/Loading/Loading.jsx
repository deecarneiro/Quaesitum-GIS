import React from "react";
import globo from "../../assets/images/globo-icon.png";
import styles from "./Loading.module.scss";

const Loading = props => {
    return (
        <div className={styles.loading}>
            <img src={globo} alt="_" />
            <span>{props.message}...</span>
        </div>
    )
}

export default Loading;