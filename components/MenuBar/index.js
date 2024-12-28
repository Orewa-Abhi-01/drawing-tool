"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEMS } from "@/utils/constants";
import {
  faPencil,
  faEraser,
  faUndo,
  faRedo,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { setActiveMenuItem, actionMenuItemsClick } from "@/app/redux/features/menuSlice";

const MenuBar = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  
  const handleMenuClick = (menuItem) => {
    dispatch(setActiveMenuItem(menuItem));
    // dispatch(actionMenuItemsClick(null));
  };


  return (
    <>
      <div className={styles.menuBar}>
        <button
          className={cx(styles.iconBtn, { [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL })} // Add the active class conditionallystyles.iconBtn}
          onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button
          className={cx(styles.iconBtn, { [styles.active]: activeMenuItem === MENU_ITEMS.ERASER })}
          onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
        >
          <FontAwesomeIcon icon={faEraser} />
        </button>
        <button
          className={styles.iconBtn}
          onClick={() => handleMenuClick(MENU_ITEMS.UNDO)}
        >
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <button
          className={styles.iconBtn}
          onClick={() => handleMenuClick(MENU_ITEMS.REDO)}
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>
        <button
          className={styles.iconBtn}
          onClick={() => handleMenuClick(MENU_ITEMS.DOWNLOAD)}
        >
          <FontAwesomeIcon icon={faSave} />
        </button>
        {/* <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        //   className="color-picker cursor-pointer"
            className={styles.iconBtn}
        /> */}

        {/* <input
          type="range"
          min="1"
          max="50"
          value={brushSize}
          onChange={(e) => setBrushSize(e.target.value)}
        //   className="brush-size cursor-pointer"
            className={styles.iconBtn}
        /> */}
      </div>
    </>
  );
};

export default MenuBar;
