import React, { useState } from "react";
import styles from "./MapItem.module.scss";
import imageDefault from "../../../../assets/images/ImgRecife.jpg";

const MapItem = (props) => {
    const { map, setMap, index } = props;
    const img = map.img ? map.img : imageDefault;
    const [hoverContent, setHoverContent] = useState(styles.none);
    console.log(map);

    return (
        <div className={`card ${styles.map}`} onClick={setMap} key={index} 
            onMouseEnter={() => setHoverContent(styles.block)} onMouseLeave={() => setHoverContent(styles.none)}>
            <a className={styles.mapBody}>
                <img src={img} className="card-img-top" alt="_MapImg" />
                <div className="card-body">
                    <div className={hoverContent}>
                        <p>{map.description}</p>
                    </div>
                    <h5 className="card-title">{map.name}</h5>
                </div>
            </a>
        </div>
    )
}

export default MapItem;