import React from "react";
import styles from "./MapItem.module.scss";
import imageDefault from "../../../../assets/images/ImgRecife.jpg";

const MapItem = (props) => {
    const { name, img = imageDefault, setMap} = props;

    return (
        <div className={`card ${styles.map}`} onClick={setMap}>
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