import React, {useState} from "react";
import styles from "../LayerList.module.scss"

const LayerItem = props => {
    const {name, onClick, index, select } = props;
    const [selected, setSelected] = useState(select ? styles.selectedLayer : "");

    const _onClick = () => {
        const valid = onClick();
        if(valid) (selected === "") ? setSelected(styles.selectedLayer) : setSelected("") 
    }
    return (
        <div onClick={_onClick} className={selected} key={index}>
            <p className={`${styles.layer} dropdown-item`}>{name}</p>
            <div className="dropdown-divider" />
        </div>
    )
}
export default LayerItem;