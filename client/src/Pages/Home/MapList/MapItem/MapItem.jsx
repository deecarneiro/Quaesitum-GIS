import React from "react";
import styles from "./MapItem.module.scss";
import imageDefault from "../../../../assets/images/ImgRecife.jpg";

const MapItem = props => {
  const { map, setMap, index } = props;
  const img = map.img ? map.img : imageDefault;

  return (
    <div className={`card ${styles.flipCard}`} onClick={setMap} key={index}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={img} className="card-img-top" alt="_MapImg" />
          <div className="card-body">
            <h5 className="card-title">{map.name}</h5>
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className="card-body">
            <p className={styles.content}>{map.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapItem;
