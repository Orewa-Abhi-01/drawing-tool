"use client";
import React from "react";
import styles from "./index.module.css";
import { commonColors } from "@/utils/constants";

const Toolbox = () => {
  const [color, setColor] = React.useState("#000000");
  const [brushSize, setBrushSize] = React.useState(10);

  const toolboxRef = React.useRef(null);

  const showColorContainer = () => {
    if (toolboxRef.current) {
      console.log("toolboxRef workng");
        toolboxRef.current.classList.toggle("hidden");
        // toolboxRef.current?.classList.toggle("hidden");  
        
         
    }
  };
  return (
    <>
      <div className={`  ${styles.toolboxContainer}  `} ref={toolboxRef}>
        <div className={styles.toolboxItem}>
          <h4 className={styles.toolboxTitle}>Stroke Color</h4>
          <div className={styles.colorContainer}>
            {Object.keys(commonColors).map((key) => (
              <div
                key={key}
                className={styles.colorBox}
                style={{ backgroundColor: commonColors[key] }}
                onClick={() => setColor(commonColors[key])}
              />
            ))}
          </div>
        </div>

        <div className={styles.toolboxItem}>
          <h4 className={styles.toolboxTitle}>Brush Size</h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              value={brushSize}
              min="5"
              max="50"
              step="5"
              onChange={(e) => setBrushSize(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* <button onClick={showColorContainer}>show</button> */}
    </>
  );
};

export default Toolbox;

{
  /* <input
type="color"
value={color}
onChange={(e) => setColor(e.target.value)}
className={styles.iconBtn}
/> */
}
