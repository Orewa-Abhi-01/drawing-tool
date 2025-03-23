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

import {
  setActiveMenuItem,
  actionMenuItemsClick,
} from "@/app/redux/features/menuSlice";
import { useResizer } from "@/hooks/useResizer";

const MenuBar = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

  const { width } = useResizer();

  const handleMenuClick = (menuItem) => {
    dispatch(setActiveMenuItem(menuItem));
    // dispatch(actionMenuItemsClick(null));
  };

  const handleActionItemClick = (itemName) => {
    dispatch(actionMenuItemsClick(itemName));
  };

  const menuButtonClass = width <= 768 ? styles.iconBtnMobile : styles.iconBtn;
  
  return (
    <>
      <div className={styles.menuBar}>
        <button
          className={cx(styles.iconBtn, {
            [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
          })} // Add the active class conditionallystyles.iconBtn}
          onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button
          className={cx(styles.iconBtn, {
            [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
          })}
          onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
        >
          <FontAwesomeIcon icon={faEraser} />
        </button>
        <button
          className={styles.iconBtn}
          onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
        >
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <button
          className={styles.iconBtn}
          onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>
        <button
          className={styles.iconBtn}
          onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}
        >
          <FontAwesomeIcon icon={faSave} />
        </button>
    
      </div>
    </>
  );
};

export default MenuBar;
