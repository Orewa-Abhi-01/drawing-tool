"use client";
import React from "react";
import styles from "./index.module.css";

import cx from "classnames";

import { commonColors, MENU_ITEMS } from "@/utils/constants";
import { useSelector, useDispatch } from "react-redux";

import {
  changeColor,
  changeBrushSize,
} from "@/app/redux/features/toolboxSlice";

const Toolbox = () => {
  const toolboxRef = React.useRef(null);

  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushSizeToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));

  };

  return (
    <>
      <div className={styles.toolboxContainer} ref={toolboxRef}>
        {showStrokeToolOption && (
          <div className={styles.toolboxItem}>
            <h4 className={styles.toolboxTitle}>Stroke Color</h4>
            <div className={styles.colorContainer}>
              {Object.keys(commonColors).map((key) => (
                <div
                  key={key}
                  className={cx(styles.colorBox, {[styles.active]: color === commonColors[key]})}
                  style={{ backgroundColor: commonColors[key] }}
                  onClick={() => updateColor( commonColors[key])}
                />
              ))}
            </div>
          </div>
        )}

        {showBrushSizeToolOption && (
          <div className={styles.toolboxItem}>
            <h4 className={styles.toolboxTitle}>Brush Size</h4>
            <div className={styles.itemContainer}>
              <input
                type="range"
                value={size}
                min="5"
                max="50"
                step="5"
                // onChange={(e) => updateBrushSize(e)}
                onChange={updateBrushSize}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Toolbox;
