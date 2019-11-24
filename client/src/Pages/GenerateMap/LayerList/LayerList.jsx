import React from "react";
import styles from "./LayerList.module.scss";
import LayerItem from "./LayerItem/LayerItem";

const LayerList = props => {
    const { layers, addLayer, selectLayer, layersSelected } = props

    return (
        <div className={styles.listLayers}>
            {layers.map((layer, index) => {
                const name = layer.name ? layer.name : `Camada ${index + 1}`;
                const selected = layersSelected.findIndex((layer) => layer === index) !== -1 ?
                    true : false;
                const _selectLayer = () => selectLayer(index);
                return (
                    <LayerItem name={name} onClick={_selectLayer} key={index} select={selected} />
                )
            })}
            <p className={`${styles.layer} dropdown-item`} onClick={addLayer}>Adicionar camada <strong>+</strong></p>
        </div>
    )
}
export default LayerList;