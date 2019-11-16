import React from "react";
import styles from "./ImportFile.module.scss";

const ImportFile = (props) => {
    const { functionImport } = props;
    return (
        <div className={styles.importFile}>
            <input type="file" className={styles.inputFile} onChange={functionImport}/>
        </div>
    )
}

export default ImportFile;