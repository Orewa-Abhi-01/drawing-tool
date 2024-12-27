"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPencil,
  faEraser,
  faUndo,
  faRedo,
  faSave,
  faPalette,
  faBrush,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import React from "react";


const MenuBar = () => {
  const [color, setColor] = React.useState("#000000");
  const [brushSize, setBrushSize] = React.useState(5);
  return (
    <>
      <div className={styles.menuBar}>
        <button className={styles.iconBtn}>
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button className={styles.iconBtn}>
          <FontAwesomeIcon icon={faEraser} />
        </button>
        <button className={styles.iconBtn}>
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <button className={styles.iconBtn}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
        <button className={styles.iconBtn}>
          <FontAwesomeIcon icon={faSave} />
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        //   className="color-picker cursor-pointer"
            className={styles.iconBtn}
        />
        <input
          type="range"
          min="1"
          max="50"
          value={brushSize}
          onChange={(e) => setBrushSize(e.target.value)}
        //   className="brush-size cursor-pointer"
            className={styles.iconBtn}
        />
      </div>
    </>
  );
};

export default MenuBar;
