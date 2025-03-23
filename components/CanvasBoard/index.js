"use client";
import React, { useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MENU_ITEMS } from "@/utils/constants";
import { actionMenuItemsClick } from "@/app/redux/features/menuSlice";
// import { socket } from "@/app/socket";

const CanvasBoard = () => {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const isDrawing = useRef(false);
  const drawHistory = useRef([]);
  const historyPointer = useRef(0);
  const { activeMenuItem, actionMenuItems } = useSelector(
    (state) => state.menu
  );
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (actionMenuItems === MENU_ITEMS.DOWNLOAD) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.href = url;
      a.download = "canvas.png";
      a.click();
    } else if (
      actionMenuItems === MENU_ITEMS.UNDO ||
      actionMenuItems === MENU_ITEMS.REDO
    ) {
      if (historyPointer.current > 0 && actionMenuItems === MENU_ITEMS.UNDO)
        historyPointer.current -= 1;
      if (
        historyPointer.current < drawHistory.current.length - 1 &&
        actionMenuItems === MENU_ITEMS.REDO
      )
        historyPointer.current += 1;

      const imageData = drawHistory.current[historyPointer.current];
      context.putImageData(imageData, 0, 0);
    } 
    // else {
    //   historyPointer.current === 0;
    //   const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    //   drawHistory.current.push(imageData);
    // }
    dispatch(actionMenuItemsClick(null));
  }, [actionMenuItems, dispatch]);

  //this useEffect is for updating the canvas in terms of color and size of item(pencil or eraser)
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const changeSpecsValues = (color, size) => {
      context.strokeStyle = color
      context.lineWidth = size
    };

    const handleChangeSpecs = (specs) => {
      console.log("specs are ", specs);
      changeSpecsValues(specs.color, specs.size);
    };
    changeSpecsValues(color, size);
    // socket.on("changeSpecs", handleChangeSpecs);

    // return () => {
    //   socket.off("changeSpecs", handleChangeSpecs);
    // }
  }, [color, size]);

  //this useEffect is for initializing the canvas (mounting)
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    //   when mounting
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beignPath = (x, y) => {
      context.beginPath();
      context.moveTo(x, y);
    };

    const drawLine = (x, y) => {
      context.lineTo(x, y);
      context.stroke();
    };

    const handleMouseDown = (e) => {
      isDrawing.current = true;
      // const { offsetX: x, offsetY: y } = e;
      beignPath(
        e.clientX || e.touches[0].clientX,
        e.clientY || e.touches[0].clientY
      );
      // socket.emit("beginPath", {
      //   x: e.clientX || e.touches[0].clientX,
      //   y: e.clientY || e.touches[0].clientY,
      // });
    };

    const handleMouseMove = (e) => {
      if (!isDrawing.current) return;
      // const { offsetX: x, offsetY: y } = e;
      drawLine(
        e.clientX || e.touches[0].clientX,
        e.clientY || e.touches[0].clientY
      );
      // socket.emit("drawLine", {
      //   x: e.clientX || e.touches[0].clientX,
      //   y: e.clientY || e.touches[0].clientY,
      // });
    };

    const handleMouseUp = () => {
      isDrawing.current = false;
      // Capture the current canvas state
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      drawHistory.current.push(imageData);
      historyPointer.current = drawHistory.current.length - 1;
    };

    const handlePathBegin = (path) => {
      beginPath(path.x, path.y);
    };

    const handlePathDrawLine = (path) => {
      drawLine(path.x, path.y);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("touchstart", handleMouseDown);
    canvas.addEventListener("touchmove", handleMouseMove);
    canvas.addEventListener("touchend", handleMouseUp);

    // socket.on("beginPath", handlePathBegin);
    // socket.on("drawLine", handlePathDrawLine);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);

      canvas.removeEventListener("touchstart", handleMouseDown);
      canvas.removeEventListener("touchmove", handleMouseMove);
      canvas.removeEventListener("touchend", handleMouseUp);

      // socket.off("beginPath", handlePathBegin);
      // socket.off("drawLine", handlePathDrawLine);

    };
  }, []);
  
  // Add resize observer for responsive canvas
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const { width, height } = entries[0].contentRect;
      canvas.width = width;
      canvas.height = height;
    });

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Memoize drawing functions
  const draw = useCallback((e) => {
    // Drawing logic
  }, [color, size]);

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasBoard;
