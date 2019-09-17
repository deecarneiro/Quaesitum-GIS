import React from "react";
import styles from "./MapItem.module.scss";

const MapItem = (props) => {
    const { name, img } = props;

    return (
        <div className={`card ${styles.map}`}>
            <a className={styles.mapBody}>
                <img src={img} className="card-img-top" alt="_MapImg" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </a>
        </div>
    )
}

export default MapItem;